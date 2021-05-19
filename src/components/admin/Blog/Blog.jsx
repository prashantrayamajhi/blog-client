import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "./../../../api/server";
import Delete from "./../../../images/trash.png";
import Edit from "./../../../images/edit.png";
import "./Blog.scss";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await Axios.get("/api/v1/blogs");
    setBlogs(res.data.data);
  };

  const handleDelete = async (id) => {
    await Axios.delete("/api/v1/blogs/" + id);
    window.location.reload();
  };

  const handleEdit = async (name, id) => {
    // setName(name);
    // setId(id);
    // setIsEdit(true);
  };

  let sn = 0;
  const mappedBlogs = blogs
    .slice(0)
    .reverse()
    .map((blog, index) => {
      sn++;
      return (
        <tr key={index}>
          <td style={{ textAlign: "center" }}>{sn}</td>
          <td>
            <Link to={`/blog/${blog._id}`} className="link">
              {blog.title}
            </Link>
          </td>
          <td>{blog.date}</td>
          <td style={{ textAlign: "center" }}>
            <Link to={`/admin/create/${blog._id}`}>
              <img
                src={Edit}
                alt="Edit Icon"
                onClick={() => {
                  handleEdit(blog.name, blog._id);
                }}
              />
            </Link>
            <img
              src={Delete}
              alt="Edit Icon"
              onClick={() => {
                handleDelete(blog._id);
              }}
            />
          </td>
        </tr>
      );
    });

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blogs-wrapper">
      <div className="title">
        <h1>Admin Blogs</h1>
        <Link className="link" to="/admin/create">
          +
        </Link>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>SN</th>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{mappedBlogs}</tbody>
      </table>
    </div>
  );
};

export default Blog;
