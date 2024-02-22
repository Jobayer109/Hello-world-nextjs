import Button from "@/app/components/button/page";
import singlePost from "@/lib/singlePost";
import Link from "next/link";

async function Post({ params }) {
  const { id } = params;
  const post = await singlePost(id);
  console.log(post);
  return (
    <div className="w-[60%] m-auto ">
      <h3 className="p-2 my-4 border rounded-sm bg-gray-300 pointer  font-sans text-lg shadow-sm shadow-gray-400 drop-shadow-lg">
        <span className="bg-black rounded text-white p-1 ">Blog title</span> :{" "}
        {post.title}
      </h3>
      <p>{post.body}</p>

      <div>
        <Link href="/blogs">
          <Button
            text={"Back"}
            customStyle={{
              marginTop: "1rem",
              paddingTop: "1px",
              paddingBottom: "1px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Post;
