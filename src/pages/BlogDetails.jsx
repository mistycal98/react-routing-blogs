import React, { Component } from "react";

// Api Call
import { blogUrl } from "../Api/blogs";

// Import Component
import BlogDetail from "../components/BlogDetail";

export default class BlogDetails extends Component {
	state = {
		blog: {},
	};

	componentDidMount = () => {
		this.fetchitems();
	};

	fetchitems = async () => {
		try {
			let data = await fetch(`${blogUrl}/blogs/${this.props.match.params.id}`);
			let result = await data.json();
			console.log(result);
			this.setState({ blog: result });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		let { author, title, imageUrl } = this.state.blog;
		return <BlogDetail author={author} title={title} image={imageUrl} />;
	}
}
