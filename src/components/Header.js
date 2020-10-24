import React from "react";
import Link from "./Link"; //link is to create route without full reloading the whole page

const Header = () => {
  return (
    <div className="navbar">
      <Link href="/api/users/register" className="item">
        Register / Login
      </Link>
      <Link href="/api/posts" className="item">
        All Posts
      </Link>
    </div>
  );
};

export default Header;
