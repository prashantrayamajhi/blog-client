import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Welcome to Programming Blogs</h1>
        <p>A lot of information about programming</p>
        <div className="search-wrapper">
          <input type="text" placeholder="Search blogs..." autoFocus />
        </div>
        <div className="tags">
          <p className="tag">React</p>
          <p className="tag">Javascript</p>
          <p className="tag">CSS</p>
          <p className="tag">Database</p>
          <p className="tag">Express</p>
          <p className="tag">Project</p>
          <p className="tag">General</p>
        </div>
      </div>
    </>
  );
};

export default Header;
