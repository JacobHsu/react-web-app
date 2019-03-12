import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';

const dataSource = [
  {
    pic:
      "https://upload.wikimedia.org/wikipedia/zh/2/2b/Captain_Marvel_Poster.jpg",
    title: "逆轉終局之戰的關鍵人物！漫威「史上最強」女英雄《驚奇隊長》",
    url:
      "https://zh.wikipedia.org/wiki/驚奇隊長_(電影)"
  },
  {
    pic:
      "https://upload.wikimedia.org/wikipedia/zh/8/8a/Avengers_Infinity_War_Poster.jpg",
    title: "【這局我布了10 年】漫威如何用18 部電影鋪陳《復仇者聯盟3：無限之戰》 ",
    url:
      "https://zh.wikipedia.org/wiki/復仇者聯盟3：無限之戰"
  },
  {
    pic:
      "https://upload.wikimedia.org/wikipedia/zh/7/76/Avengers_Endgame_Poster.jpg",
    title: "《復仇者聯盟：終局之戰》剪輯官宣完工！電影時長依舊未知",
    url:
      "https://zh.wikipedia.org/wiki/復仇者聯盟：終局之戰"
  }
];
class Headline extends Component {
  render() {
    const settings = {
      slidesToShow: 1,
      swipeToSlide: true,
      autoplay: true,
      vertical: true //自上而下滾動效果
    };
    return (
      <div className="headline">
        <div className="headline__logo" />
        <div className="headline__slider">
          <Slider {...settings}>
            {dataSource.map((item, index) => {
              return (
                <a
                  key={index}
                  className="headline__sliderInner"
                  href={item.url}
                >
                  <div className="headline__sliderTitle">{item.title}</div>
                  <div className="headline__sliderImgWrapper">
                    <img
                      className="headline__sliderImg"
                      src={item.pic}
                      alt="sliderImg"
                    />
                  </div>
                </a>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Headline;
