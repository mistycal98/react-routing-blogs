import React, { Component } from "react";

import styles from "./Blog.module.scss";
export default class Blog extends Component {
	render() {
		let { author, id, imageUrl, title } = this.props;
		return (
			<div className={styles.card} key={id}>
				<h3 className={styles.text}>{author}</h3>
				<img className={styles.imgUrl} src={imageUrl} alt={imageUrl} />
				<p className={styles.text}>{title}</p>
			</div>
		);
	}
}
