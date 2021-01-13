import React, { Component } from "react";
import { Link } from "react-router-dom";

// Styles Import
import styles from "./BlogDetail.module.scss";
export default class BlogDetail extends Component {
	render() {
		let { author, image, title, content, links } = this.props;
		return (
			<div className={styles.body}>
				<div className={styles.blog}>
					<h1>{author}</h1>
					<img src={image} alt={title} />
					<h1>{title}</h1>
					<p>{content}</p>
				</div>
				<div className={styles.aside}>
					<div className={styles.links}>
						{typeof links === "undefined" ? (
							<h1>Loading</h1>
						) : (
							links.map((link) => (
								<Link to={`/blogs/${link.id}`} key={link.id}>
									<p key={link.id}>{link.title}</p>
								</Link>
							))
						)}
					</div>
				</div>
			</div>
		);
	}
}
