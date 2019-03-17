import React, { Component } from "react";
import "./style.css";

class ProductOverview extends Component {
  render() {
    return (
      <div className="productOverview">
        <div className="productOverview__header">
          <div className="productOverview__imgContainer">
            <img
              alt=""
              className="productOverview__img"
              src="https://m.media-amazon.com/images/M/MV5BMjI5ODQwMjg5N15BMl5BanBnXkFtZTgwMTk2Njk5NDM@._V1_SX1777_CR0,0,1777,937_AL_.jpg"
            />
          </div>
          <div className="productOverview__baseInfo">
            <div className="productOverview__title">Infinity War</div>
            <div className="productOverview__content">
              漫威電影宇宙10年集大成巔峰之作！史上最強超級英雄全面集結。
            </div>
          </div>
        </div>
        <div className="productOverview__purchase">
          <span className="productOverview__symbol">TWD</span>
          <span className="productOverview__price">290</span>
          <span className="productOverview__price--old">490</span>
          <a className="productOverview__btn">立即購買</a>
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
