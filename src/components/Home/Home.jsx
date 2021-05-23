import React, { useState, useEffect } from "react";
import Header from "./../Header/Header";
import Card from "./../Card/Card";
import Axios from "./../../api/server";
import "./Home.scss";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSelect = (tag) => {
    const arr = [...selected];
    if (arr.indexOf(tag) === -1) {
      arr.push(tag);
      setSelected(arr);
    } else {
      arr.splice(arr.indexOf(tag), 1);
      setSelected(arr);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      if (selected.length <= 0) {
        const res = await Axios.get("/api/v1/blogs");
        setBlogs(res.data.data);
      } else {
        const data = { tags: selected };
        const res = await Axios.post("/api/v1/blogs/tags", data);
        console.log(res.data.data);
        setBlogs(res.data.data);
      }
    };
    fetchBlogs();
  }, [selected]);

  const mappedBlogs = blogs.map((blog, index) => {
    return (
      <Card
        id={blog._id}
        key={index}
        title={blog.title}
        date={blog.date}
        tag={blog.tag.name}
        description={blog.description}
      />
    );
  });

  return (
    <>
      <Header handleSelect={handleSelect} selected={selected} />
      <div className="blogs-wrapper">{mappedBlogs}</div>
    </>
  );
};

export default Home;
