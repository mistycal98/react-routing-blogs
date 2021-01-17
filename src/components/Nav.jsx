import React, { Component } from "react";
import logo from "../assets/50001008.5332ba36.png";
import styles from "./Nav.module.scss";

import { Link, withRouter } from "react-router-dom";
class Nav extends Component {
	handleImageClick = (event) => {
		console.log(this.props.history.push("/"));
	};

	render() {
		return (
			<nav>
				<img
					onClick={this.handleImageClick}
					className={styles.img}
					src={logo}
					alt="Official logo"
				/>
				<ul className={styles.links}>
					<Link to="/blogs">
						<li>Blogs</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
				</ul>
			</nav>
		);
	}
}

export default withRouter(Nav);
