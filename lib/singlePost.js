async function singlePost(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!result.ok) {
    throw new Error("Something went wrong on fetching single post");
  }

  return result.json();
}

export default singlePost;
