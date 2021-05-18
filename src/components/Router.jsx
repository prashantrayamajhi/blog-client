import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

// admin components
import Tags from "./admin/Tags/Tags";
import Blogs from "./admin/Blog/Blog";
import Create from "./admin/Blog/CreateBlog";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin/tags" component={Tags} />
          <Route exact path="/admin/blogs" component={Blogs} />
          <Route exact path="/admin/create" component={Create} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default RouterComponent;
