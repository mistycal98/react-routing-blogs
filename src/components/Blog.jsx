import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    let { author, id, imageUrl, title } = this.props;
    return (
      <div className='card' key={id}>
        <p>{author}</p>
        <img className='imgUrl' src={imageUrl} alt={imageUrl} />
        <p>{title}</p>
      </div>
    );
  }
}
