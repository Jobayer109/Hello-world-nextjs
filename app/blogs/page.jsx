import getAllPosts from "@/lib/allPosts";
import Link from "next/link";

async function Blogs() {
  const posts = await getAllPosts();

  return (
    <main className="text-center mt-6">
      <h2 className="text-2xl font-bold underline mb-6">All Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`/blogs/${post.id}`}>
            <li className="w-[40%] m-auto my-4 border rounded-sm bg-gray-300 pointer hover:bg-gray-100 font-sans text-lg shadow-sm shadow-gray-400 drop-shadow-lg">
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default Blogs;
