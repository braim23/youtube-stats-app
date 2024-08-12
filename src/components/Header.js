import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="mx-auto p-8 bg-red-700">
      <h1 className="text-white text-4xl">
        <a className="nav-brand" aria-current="page" href="/">
          YouTube Stats
        </a>
      </h1>
    </header>
  );
}

export default Header;
