export async function insertOrder(payload) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbmNrbXR2eGpqcmtkeWJidGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NTUsImV4cCI6MTk4MjE3NDc1NX0.lh2QqSjJdb1zNk6ry89TNdIBHckN-Lg6Kbdn5JnGXnk";
  const url = "https://fanckmtvxjjrkdybbtjv.supabase.co";
  const res = await fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbmNrbXR2eGpqcmtkeWJidGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NTUsImV4cCI6MTk4MjE3NDc1NX0.lh2QqSjJdb1zNk6ry89TNdIBHckN-Lg6Kbdn5JnGXnk",
      Prefer: "return=representation",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhbmNrbXR2eGpqcmtkeWJidGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NTUsImV4cCI6MTk4MjE3NDc1NX0.lh2QqSjJdb1zNk6ry89TNdIBHckN-Lg6Kbdn5JnGXnk",
    },
    body: JSON.stringify(payload),
  });
  return await res.json();
}
