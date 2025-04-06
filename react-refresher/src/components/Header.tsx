import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.headerContainer}>
      <h2>React Posts</h2>
      <Link to="/create-post" className={classes.button}>
        New post
      </Link>
    </header>
  );
};

export default Header;
