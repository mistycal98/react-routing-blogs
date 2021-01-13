import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// Styles Import
import styles from "./BlogDetail.module.scss";
class BlogDetail extends Component {
  handleClickNavigate = (blogId) => {
    console.log(this.props.history);
    this.props.history.push(`/blogs/${blogId}`);
  };

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
                  <p
                    id={link.id}
                    onClick={() => {
                      this.handleClickNavigate(link.id);
                    }}
                  >
                    {link.title}
                  </p>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(BlogDetail);
