import React, { useEffect, useState } from "react";
import Axios from "./../../api/server";
import { useParams } from "react-router-dom";
import Markdown from "marked";
import "./Blog.scss";

const Blog = () => {
  const [blog, setBlog] = useState({});

  const [markdown, setMarkdown] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await Axios.get("/api/v1/blogs/" + id);
      setBlog(res.data.data);
      setMarkdown(Markdown(res.data.data.sanitizedHTML));
    };
    fetchBlog();
  }, [id]);

  return (
    <>
      <div className="blog">
        <h1>{blog.title}</h1>
        <p className="date">{blog.date}</p>
        {blog.tag && <p className="tag">{blog.tag.name}</p>}
        <div className="content">
          <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
        </div>
      </div>
    </>
  );
};

export default Blog;
