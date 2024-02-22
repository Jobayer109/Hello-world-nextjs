import Button from "@/app/components/button/page";
import { getComments } from "@/lib/getComments";
import singlePost from "@/lib/singlePost";
import Link from "next/link";
import { FaCommentDots, FaUser } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

async function Post({ params }) {
  const { id } = params;
  const post = await singlePost(id);
  const comments = await getComments(id);

  return (
    <div className="w-[60%] m-auto mt-10  ">
      <div>
        <h3 className="p-2 my-4 border rounded-sm bg-gray-300 pointer  font-sans text-lg shadow-sm shadow-gray-400 drop-shadow-lg">
          <span className="bg-black rounded text-white p-1 ">Blog title</span> :{" "}
          {post.title}
        </h3>
        <div>
          <Link href="/blogs" title="Back to all blogs">
            <Button
              title="Back"
              text={<IoArrowBackCircleSharp />}
              customStyle={{
                marginTop: "1rem",
                border: "none",
                fontSize: "2rem",
              }}
            />
          </Link>
        </div>
        <p className="border px-4 py-6 text-lg text-justify">{post.body}</p>
      </div>
      <div>
        <h3 className="mt-12 mb-4 text-lg bg-black text-center p-2 text-white rounded-lg">
          Comments
        </h3>
        <ul className="">
          {comments.map((comment) => (
            <li key={comment.id} className="my-3 ">
              <div className="border border-black rounded-md p-4">
                <p className="flex items-center gap-3">
                  <FaUser />
                  {comment.name}
                </p>
                <p className="flex items-center gap-3">
                  {" "}
                  <MdAlternateEmail /> {comment.email}
                </p>
                <p className="flex items-center gap-3 ">
                  {" "}
                  <FaCommentDots className="text-lg" />{" "}
                  <span className="border ms-2 p-2 bg-gray-200">
                    {comment.body}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Post;
