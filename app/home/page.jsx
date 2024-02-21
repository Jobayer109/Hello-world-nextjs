import { thumb } from "@/public/photo.jpg";
import Image from "next/image";
import Button from "../components/button/page";

function Homepage() {
  return (
    <div className="p-6">
      <div className="">
        <h3 className="text-3xl font-bold mb-2">
          This The Best Blog Website.{" "}
        </h3>
        <p>
          Find out which posts are a hit with Blogger’s built-in analytics. You
          wll see where your audience is coming from and what they’re interested
          in. You can even connect your blog directly to Google Analytics for a
          more detailed look.
        </p>
        <div>
          <Button
            text={"Explore more"}
            customStyle={{ backgroundColor: "black", color: "yellow" }}
          />
        </div>
      </div>
      <div className="">
        <Image src={thumb} alt="Hello photo" width={100} height={20} />
      </div>
    </div>
  );
}

export default Homepage;
