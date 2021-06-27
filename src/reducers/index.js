import { combineReducers } from "redux";

import blogs from "./blogs";
import tags from "./tags";

export default combineReducers({
  blogs,
  tags,
});
