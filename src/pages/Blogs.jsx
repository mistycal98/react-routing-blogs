// Package Import
import React, { Component } from "react";
import { Link } from "react-router-dom";

// Api Call
import { blogUrl } from "../Api/blogs";

// Component Import
import Blog from "../components/Blog";

//Styles Import
import styles from "../components/Blog.module.scss";
export default class Blogs extends Component {
	state = {
		blogs: [],
	};
	componentDidMount = async () => {
		try {
			let data = await fetch(`${blogUrl}/blogs`);
			let result = await data.json();
			console.table(result);
			this.setState({ blogs: [...result] });
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		return (
			<div className={styles.cards}>
				{this.state.blogs.map((blog) => {
					return (
						<Link to={`/blogs/${blog.id}`} key={blog.id}>
							<Blog author={blog.author} imageUrl={blog.imageUrl} title={blog.title} />
						</Link>
					);
				})}
			</div>
		);
	}
}
