const blogsReducer = (blogs = [], actions) => {
  switch (actions.type) {
    case "ALL_BLOGS":
      return actions.payload;
    case "GET_BLOG_BY_ID":
      return [actions.payload];
    case "FILTER_BLOGS":
      return blogs.filter((blog) => blog.tag._id === actions.payload);
    default:
      return blogs;
  }
};

export default blogsReducer;
