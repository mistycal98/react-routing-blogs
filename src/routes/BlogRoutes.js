import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import BlogDetail from "../pages/BlogDetail";

export default class BlogRoutes extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/blogs" exact component={Blogs}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/blogs/:id" component={BlogDetail}></Route>
				</Switch>
			</div>
		);
	}
}
