import React, { Component } from "react";

// Styles Import
import styles from "./BlogDetail.module.scss";
import Aside from "./Aside";
export default class BlogDetail extends Component {
	render() {
		let { author, image, title, content, links } = this.props;
		return (
			<div className={styles.body}>
				<p>{author}</p>
				<img src={image} alt={title} />
				<h1>{title}</h1>
				<p>{content}</p>
				<Aside links={links} />
			</div>
		);
	}
}
