import { useState, useEffect } from "react";
import Axios from "./../../api/server";
import "./Header.scss";

const Header = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      const res = await Axios.get("/api/v1/tags");
      setTags(res.data.data);
    };
    fetchTags();
  }, []);

  const mappedTags = tags.map((tag, index) => {
    return (
      <p className="tag" key={index}>
        {tag.name}
      </p>
    );
  });
  return (
    <>
      <div className="header">
        <h1>Welcome to Programming Blogs</h1>
        <p>A lot of information about programming</p>
        <div className="search-wrapper">
          <input type="text" placeholder="Search blogs..." autoFocus />
        </div>
        <div className="tags">{mappedTags}</div>
      </div>
    </>
  );
};

export default Header;
