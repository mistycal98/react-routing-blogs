import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Api Call
import { blogUrl } from "../Api/blogs";

// Import Component
import BlogDetail from "../components/BlogDetail";

class BlogDetails extends Component {
  state = {
    blog: {},
    currentId: "",
  };

  componentDidMount = async () => {
    try {
      let data = await fetch(`${blogUrl}/blogs/${this.props.match.params.id}`);
      let result = await data.json();
      // console.log(result);
      this.setState({ blog: { ...result } });
    } catch (error) {
      console.log(error);
    }
  };

  // renderBlog = (event) => {
  //   this.setState({ currentId: event.target.id }, async () => {
  //     console.log(event.target);
  //     let result = await fetch(`${blogUrl}/blogs/${this.state.currentId}`);
  //     let response = await result.json();
  //     console.log(response);
  //     this.setState({ blog: { ...response } });
  //   });
  // };

  render() {
    let { author, title, imageUrl, content, links } = this.state.blog;
    return (
      <BlogDetail
        author={author}
        title={title}
        image={imageUrl}
        content={content}
        links={links}
        // renderBlog={this.renderBlog}
      />
    );
  }
}

export default withRouter(BlogDetails);
