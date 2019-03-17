import React, { Component } from "react";
import "./style.css"

class ShopInfo extends Component {
  render() {
    return (
      <div className="shopInfo">
        <div className="shopInfo__header">
            商店
          <span className="shopInfo__arrow" />
        </div>
        <div className="shopInfo__middle">
          <div className="shopInfo__middleLeft">
            <div className="shopInfo__shopName">iTunes</div>
            <div className="shopInfo__starsWrapper">
              <span className="shopInfo__stars">
                <i className="shopInfo__stars--red" style={{ width: "80%" }} alt="80% 4stars"/> 
              </span>
              <span className="shopInfo__distance">US</span>
            </div>
          </div>
          <div className="shopInfo__middleRight">
            <i className="shopInfo__phoneIcon" />
          </div>
        </div>
        <div className="shopInfo__bottom">
          <i className="shopInfo__locationIcon" />US
        </div>
      </div>
    );
  }
}

export default ShopInfo;
