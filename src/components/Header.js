import React from "react";
import Link from "./Link"; //link is to create route without full reloading the whole page

const Header = () => {
  return (
    <div className="navbar">
      <Link href="/" className="item">
        Home
      </Link>

      <Link href="/api/posts" className="item">
        Posts
      </Link>
      <Link href="/api/users/register" className="item">
        Register / Login
      </Link>
    </div>
  );
};

export default Header;
