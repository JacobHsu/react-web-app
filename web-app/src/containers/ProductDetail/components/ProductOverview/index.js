import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class ProductOverview extends Component {
  render() {
    const {id, product, picture, description, currentPrice, oldPrice} = this.props.data;
    return (
      <div className="productOverview">
        <div className="productOverview__header">
          <div className="productOverview__imgContainer">
            <img
              alt=""
              className="productOverview__img"
              src={picture}
            />
          </div>
          <div className="productOverview__baseInfo">
            <div className="productOverview__title">{product}</div>
            <div className="productOverview__content">
              {description}
            </div>
          </div>
        </div>
        <div className="productOverview__purchase">
          <span className="productOverview__symbol">TWD</span>
          <span className="productOverview__price">{currentPrice}</span>
          <span className="productOverview__price--old">{oldPrice}</span>
          <Link className="productOverview__btn" to={`/purchase/${id}`}>立即購買</Link>
        </div>
        <ul className="productOverview__remark">
          <li className="productOverview__remarkItem">
            <i className="productOverview__sign1" />
            <span className="productOverview__desc">7日內可退</span>
          </li>
          <li className="productOverview__remarkItem">
            <i className="productOverview__sign2" />
            <span className="productOverview__desc">過期自動退</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductOverview;
