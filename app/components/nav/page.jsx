import classes from "./nav.module.css";

function Navbar() {
  return (
    <nav className={classes.nav__container}>
      <div className="nav__right">
        <h1 className="text-lg font-extrabold">
          Hello World <span className="text-yellow-500 text-xl">.</span>
        </h1>
      </div>
      <div>
        <ul className={classes.menu}>
          <li>Home</li>
          <li>Blogs</li>
          <li>About</li>
        </ul>
      </div>
      <div className="bg-white text-black rounded-md px-3 py-1 font-medium">
        <button>Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
