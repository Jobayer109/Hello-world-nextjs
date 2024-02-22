async function getAllPosts() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  if (!result.ok) {
    throw new Error("Something went wrong on fetching all posts");
  }

  return result.json();
}

export default getAllPosts;
