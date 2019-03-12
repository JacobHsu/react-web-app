import React, { Component } from "react";
import "./style.css";

class LikeItem extends Component {
  render() {
    const {
      name,
      tag,
      picture,
      genre,
      currentPrice,
      oldPrice,
      year
    } = this.props.data;
    return (
      <a className="likeItem" href="http://google.com">
        <div className="likeItem__picContainer">
          <div className="likeItem__picTag">{tag}</div>
          <img className="likeItem__pic" src={picture} alt="pic" />
        </div>
        <div className="likeItem__content">
          <div className="likeItem__shop">{name}</div>
          <div className="likeItem__genre">{genre}</div>
          <div className="likeItem__detail">
            <div className="likeItem__price">
              <ins className="likeItem__currentPrice">{currentPrice}</ins>
              <del className="likeItem__oldPrice">{oldPrice}</del>
            </div>
            <div className="likeItem__sale">{year}</div>
          </div>
        </div>
      </a>
    );
  }
}

export default LikeItem;
