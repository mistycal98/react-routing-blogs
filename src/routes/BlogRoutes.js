import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Pages Import
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";

//Styles import
export default class BlogRoutes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/blogs" exact component={Blogs}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/blogs/:id" component={BlogDetails}></Route>
			</Switch>
		);
	}
}
