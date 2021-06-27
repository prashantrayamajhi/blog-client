const tagsReducer = (tags = [], actions) => {
  switch (actions.type) {
    case "GET_TAGS":
      return actions.payload;
    default:
      return tags;
  }
};

export default tagsReducer;
