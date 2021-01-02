import React, { Component } from "react";

export default class BlogDetail extends Component {
	render() {
		return (
			<div>
				<p>{this.props.author}</p>
				<img src={this.props.image} alt={this.props.title} />
				<p>{this.props.title}</p>
			</div>
		);
	}
}
