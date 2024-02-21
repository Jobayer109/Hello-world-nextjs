import Link from "next/link";
import Button from "../button/page";
import classes from "./nav.module.css";

function Navbar() {
  return (
    <nav className={classes.nav__container}>
      <div className="nav__right">
        <Link href="/">
          <h1 className="text-lg font-extrabold">
            Hello World <span className="text-yellow-500 text-xl">.</span>
          </h1>
        </Link>
      </div>
      <div>
        <ul className={classes.menu}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
      <div>
        <Button text={"Sign up"} />
      </div>
    </nav>
  );
}

export default Navbar;
