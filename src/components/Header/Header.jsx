import { useState, useEffect } from "react";
import Axios from "./../../api/server";
import "./Header.scss";

const Header = ({ handleSelect, selected }) => {
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
      <p
        className={`tag ${selected.indexOf(tag._id) !== -1 ? "active" : ""}`}
        key={index}
        onClick={() => {
          handleSelect(tag._id);
        }}
      >
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
