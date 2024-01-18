export function extractVideoId(youtubeLink) {
  // Regular expression to match the video ID after 'v=' in regular YouTube links
  const regularRegex = /[?&]v=([^&]+)/;

  // Regular expression to match the video ID after the last '/' in 'youtu.be' links
  const shortRegex = /youtu\.be\/([^/?]+)/;

  // Check for a match in regular YouTube links
  const regularMatch = youtubeLink.match(regularRegex);

  if (regularMatch && regularMatch[1]) {
    // Return the extracted video ID from regular YouTube links
    return regularMatch[1];
  }

  // Check for a match in 'youtu.be' links
  const shortMatch = youtubeLink.match(shortRegex);

  if (shortMatch && shortMatch[1]) {
    // Return the extracted video ID from 'youtu.be' links
    return shortMatch[1];
  }

  // Handle the case when no match is found for both regular and 'youtu.be' links
  console.error("Invalid YouTube link");
  return null;
}
