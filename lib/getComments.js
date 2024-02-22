export async function getComments(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!result.ok) {
    throw new Error("Problem created on fetching comments");
  }

  return result.json();
}
