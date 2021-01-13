import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Pages Import
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import About from "../pages/About";

// Lazy Loading Components Using React.lazy
// const About = React.lazy(() => import("../pages/About"));
// const BlogDetails = React.lazy(() => import("../pages/BlogDetails"));

//Styles import
export default class BlogRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/blogs" exact component={Blogs}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/blogs/:id" exact component={BlogDetails}></Route>
      </Switch>
    );
  }
}
