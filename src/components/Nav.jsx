import React, { Component } from "react";
import logo from "../assets/logo.svg";
import styles from "./Nav.module.scss";

import { Link } from "react-router-dom";

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<img className={styles.img} src={logo} alt="Official logo" />
				<ul className={styles.links}>
					<Link to="/">
						<li>Home</li>
					</Link>
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
