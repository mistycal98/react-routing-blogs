import React, { Component } from "react";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
	render() {
		return (
			<div className={styles.footer}>
				<p className={styles["footer-info"]}>@CopyRight 2020</p>
			</div>
		);
	}
}
