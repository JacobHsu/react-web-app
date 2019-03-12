import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";

const dataSource = [
  [
    {
      name: "喜劇",
      src: "https://image.flaticon.com/icons/svg/1599/1599666.svg"
    },
    {
      name: "愛情",
      src: "https://image.flaticon.com/icons/svg/1306/1306596.svg"
    },
    {
      name: "懸疑",
      src: "https://image.flaticon.com/icons/svg/1599/1599683.svg"
    },
    {
      name: "奇幻",
      src: "https://image.flaticon.com/icons/svg/1224/1224042.svg"
    },
    {
      name: "科幻",
      src: "https://image.flaticon.com/icons/svg/1599/1599682.svg"
    },
    {
      name: "歌舞",
      src: "https://image.flaticon.com/icons/svg/1599/1599677.svg"
    },
    {
      name: "戰爭",
      src: "https://image.flaticon.com/icons/svg/1599/1599657.svg"
    },
    {
      name: "恐怖",
      src: "https://www.flaticon.com/premium-icon/icons/svg/1385/1385820.svg"
    },
    {
      name: "災難",
      src: "https://image.flaticon.com/icons/svg/733/733077.svg"
    },
    {
      name: "動作",
      src: "https://image.flaticon.com/icons/svg/1484/1484841.svg"
    }
  ],
  [
    {
      name: "預告",
      src: "https://image.flaticon.com/icons/svg/1599/1599691.svg"
    },
    {
      name: "賣座",
      src: "https://image.flaticon.com/icons/svg/1599/1599672.svg"
    },
    {
      name: "爆米花",
      src: "https://image.flaticon.com/icons/svg/1599/1599652.svg"
    },
    {
      name: "奧斯卡",
      src: "https://image.flaticon.com/icons/svg/1599/1599645.svg"
    },
    {
      name: "金棕櫚",
      src: "https://image.flaticon.com/icons/svg/1599/1599685.svg"
    },
    {
      name: "紀錄片",
      src: "https://image.flaticon.com/icons/svg/1599/1599662.svg"
    },
    {
      name: "剪接",
      src: "https://image.flaticon.com/icons/svg/1599/1599669.svg"
    },
    {
      name: "原聲",
      src: "https://image.flaticon.com/icons/svg/1599/1599648.svg"
    },
    {
      name: "導演",
      src: "https://image.flaticon.com/icons/svg/1599/1599664.svg"
    },
    {
      name: "服裝",
      src: "https://image.flaticon.com/icons/svg/1599/1599674.svg"
    }
  ]
];

class Category extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      swipeToSlide: true,
      autoplay: true
    };
    return (
      <div className="category">
        <Slider {...settings}>
          {dataSource.map((section, index) => {
            return (
              <div key={index}>
                {section.map((item, i) => {
                  return (
                    <div className="category__section" key={i}>
                      <img
                        className="category__icon"
                        src={item.src}
                        alt="img"
                      />
                      <div>
                        <span className="category__text">{item.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Category;
