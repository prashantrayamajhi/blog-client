import React, { useState, useEffect } from "react";
import Axios from "./../../../api/server";
import { useHistory } from "react-router-dom";
import "./CreateBlog.scss";

const CreateBlog = () => {
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const history = useHistory();

  // states for inputs
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleInputChange = (updateState, value) => {
    updateState(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      title,
      tag,
      description,
      content,
    };
    try {
      const res = await Axios.post("/api/v1/blogs", data);
      console.log(res);
      if (res.status === 201) {
        history.push("/admin/blogs");
      }
    } catch (err) {
      console.log(err);
      setErr(err.response.data.err);
      alert(err.response.data.err);
      setIsLoading(false);
    }
  };

  const renderTags = tags.map((tag, index) => {
    return (
      <option key={index} value={tag._id}>
        {tag.name}
      </option>
    );
  });

  useEffect(() => {
    const fetchTags = async () => {
      const res = await Axios.get("/api/v1/tags");
      setTags(res.data.data);
      setTag(res.data.data[0]._id);
    };
    fetchTags();
  }, []);

  const displayBtn = () => {
    if (isLoading) {
      return <div className="loader"></div>;
    } else {
      return <button disabled={isLoading}>Submit</button>;
    }
  };

  return (
    <div className="create-blog">
      <h2>Let's write a blog :)</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => {
              handleInputChange(setTitle, e.target.value);
            }}
          />
        </div>
        <div className="input-wrapper">
          <select
            id="tags"
            value={tag}
            onChange={(e) => {
              handleInputChange(setTag, e.target.value);
            }}
          >
            {renderTags}
          </select>
        </div>

        <div className="input-wrapper">
          <textarea
            placeholder="Description"
            rows={4}
            data={description}
            onChange={(e) => {
              handleInputChange(setDescription, e.target.value);
            }}
          ></textarea>
        </div>

        <div className="input-wrapper">
          <textarea
            placeholder="Write your blog"
            rows={8}
            data={content}
            onChange={(e) => {
              handleInputChange(setContent, e.target.value);
            }}
          ></textarea>
        </div>
        {displayBtn()}
      </form>
    </div>
  );
};

export default CreateBlog;
