function Post({ params }) {
  const { id } = params;
  return <div>Post: {id}</div>;
}

export default Post;
