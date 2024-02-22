import thumb from "@/images/goal.jpg";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/button/page";

export default function Home() {
  return (
    <main>
      <div className="my-4 flex items-center justify-around">
        <div className="">
          <h3 className="text-3xl font-bold mb-2">
            This The Best Blog Website.{" "}
          </h3>
          <p className="my-12">
            Find out which posts are a hit with Blogger’s built-in analytics.
            <br />
            You wll see where your audience is coming from and what they’re
            interested in. <br /> You can even connect your blog directly to
            Google Analytics for a more detailed look.
          </p>
          <div>
            <Link href="/blogs">
              <Button
                text={"Explore more"}
                customStyle={{
                  backgroundColor: "black",
                  color: "yellow",
                  padding: ".5rem 1rem",
                }}
              />
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            className="rounded-lg w-[90%] m-auto shadow-xl shadow-slate-700 drop-shadow-xl "
            src={thumb}
            alt="Hello photo"
            width={500}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
