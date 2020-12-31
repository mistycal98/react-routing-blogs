import React, { Component } from "react";

// Api Call
import { blogUrl } from "../Api/blogs";

export default class BlogDetail extends Component {
  state = {
    blog:{},
  };

  componentDidMount = () => {
    this.fetchitems();
  }

  fetchitems = async () => {
    try {
      let data = await fetch(`${blogUrl}/blogs/${this.props.match.params.id}`);
      let result = await data.json();
      console.log(result);
      this.setState({ blog: result });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let { author, title, imageUrl, links } = this.state.blog;
    return (
      <div>
        <p>{author}</p>
        <img src={imageUrl} alt={author}  />
        <p>{title}</p>
        {/* <p>{links}</p>
         */}
         {console.log(links[0])}
        {/* {
          this.state.blog.links.map(link=>console.log(link))
        } */}
        </div>
    ); 
  }
}
