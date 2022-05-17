export function submitComment() {
  fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        item_id: "2",
        username: "Joseph",
        comment: "This is an Awesome movie!",
      }),
    }
  ).then((res) => res.ok);
}

export function getComments() {
  fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p0Upap7Zse2e8Jq92I1x/comments?item_id=2"
  ).then((res) => res.json());
}

submitComment();
getComments();
