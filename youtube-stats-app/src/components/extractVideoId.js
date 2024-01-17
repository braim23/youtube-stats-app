export function extractVideoId(youtubeLink) {
  // Regular expression to match the video ID after 'v='
  const regex = /[?&]v=([^&]+)/;
  const match = youtubeLink.match(regex);

  // Check if a match is found
  if (match && match[1]) {
    // Return the extracted video ID
    return match[1];
  } else {
    // Handle the case when no match is found
    console.error("Invalid YouTube link");
    return null;
  }
}
