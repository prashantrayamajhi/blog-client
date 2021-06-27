import Axios from "./../api/server";

export const getTags = () => async (dispatch) => {
  const res = await Axios.get("/api/v1/tags");
  dispatch({ type: "GET_TAGS", payload: res.data.data });
};
