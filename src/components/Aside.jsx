import React, { Component } from "react";
import styles from "./Aside.module.scss";
export default class Aside extends Component {
  render() {
    let { links } = this.props;
    return (
      <div className={styles.links}>
        {typeof links === "undefined" ? (
          <h1>Loading</h1>
        ) : (
          links.map((link) => <p key={link.id}>{link.title}</p>)
        )}
      </div>
    );
  }
}
