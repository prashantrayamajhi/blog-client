import Axios from "../api/server";

export const getBlogs = () => async (dispatch) => {
  try {
    const res = await Axios.get("/api/v1/blogs");
    dispatch({ type: "ALL_BLOGS", payload: res.data.data });
  } catch (err) {
    console.log(err);
  }
};

export const getBlogById = (id) => async (dispatch) => {
  try {
    const res = await Axios.get("/api/v1/blogs/" + id);
    dispatch({ type: "GET_BLOG_BY_ID", payload: res.data.data });
  } catch (err) {
    console.log(err);
  }
};
