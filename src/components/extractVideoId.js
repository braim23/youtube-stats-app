export function extractVideoId(youtubeLink) {
  // Regular expression to match the video ID after 'v=' in regular YouTube links
  const regularRegex = /[?&]v=([^&]+)/;

  // Regular expression to match the video ID after the last '/' in 'youtu.be' links
  const shortRegex = /youtu\.be\/([^/?]+)/;

  // Regular expression to match the video ID after '/live/' in live video links
  const liveRegex = /\/live\/([^/?]+)/;

  // Regular expression to match the video ID in YouTube Shorts links
  const shortsRegex = /(?:shorts(?:\/[^/?]+)?\/|youtu\.be\/)([^/?]+)/;

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

  // Check for a match in live video links
  const liveMatch = youtubeLink.match(liveRegex);

  if (liveMatch && liveMatch[1]) {
    // Return the extracted video ID from live video links
    return liveMatch[1];
  }

  // Check for a match in YouTube Shorts links
  const shortsMatch = youtubeLink.match(shortsRegex);

  if (shortsMatch && shortsMatch[1]) {
    // Return the extracted video ID from YouTube Shorts links
    return shortsMatch[1];
  }

  // Handle the case when no match is found for regular, 'youtu.be', live, and Shorts links
  console.error("Invalid YouTube link");
  return null;
}
