import React, { Component } from "react";
import "./style.css";

class Activity extends Component {
  render() {
    return (
      <div className="activity">
        <div className="activity__block">
          <a
            className="activity__content activity__content--pink"
            href="https://www.ign.com/lists/avengers"
          >
            <div className="activity__title">復仇者聯盟成員</div>
            <div className="activity__subTitle activity__subTitle--pink">
               票選TOP 50
            </div>
            <img
              className="activity__pic" alt="activity1"
              src="https://res.cloudinary.com/emazecom/image/fetch/c_limit,a_ignore,w_120,h_120/http%3A%2F%2Fvignette2.wikia.nocookie.net%2Fmarvelcinematicuniverse%2Fimages%2Fa%2Fad%2FAvengers_Logo.png%2Frevision%2Flatest%3Fcb%3D20160218131959"
            />
          </a>
        </div>
        <div className="activity__block">
          <a
            className="activity__content activity__content--blue"
            href="https://www.facebook.com/imoviesales/"
          >
            <div className="activity__title">優惠福利放送</div>
            <div className="activity__subTitle activity__subTitle--blue">
              電影特價報
            </div>
            <img
              className="activity__pic" alt="activity2"
              src="https://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a9b8c52c341892600ff7260c89025a59.png"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Activity;
