import React, { useState, useEffect } from "react";
import Header from "./../Header/Header";
import Card from "./../Card/Card";
import Axios from "./../../api/server";
import "./Home.scss";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await Axios.get("/api/v1/blogs");
      setBlogs(res.data.data);
    };
    fetchBlogs();
  }, []);

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
      <Header />
      <div className="blogs-wrapper">{mappedBlogs}</div>
    </>
  );
};

export default Home;
