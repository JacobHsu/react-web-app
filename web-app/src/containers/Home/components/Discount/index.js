import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const dataSource = [
  {
    id: "m-1",
    url: "https://www.imdb.com/title/tt0848228/?ref_=nv_sr_5",
    shopId: "s-100",
    shop: "The Avengers",
    product: "The Avengers (2012)",
    currentPrice: 190,
    oldPrice: 390,
    picture:
      "https://m.media-amazon.com/images/M/MV5BMTM2MzY1ODc1Nl5BMl5BanBnXkFtZTcwNTg4OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
  },
  {
    id: "m-2",
    url: "https://www.imdb.com/title/tt2395427/?ref_=nv_sr_8",
    shopId: "s-101",
    shop: "Age of Ultron",
    product: "Age of Ultron",
    currentPrice: 190,
    oldPrice: 390,
    picture:
      "https://m.media-amazon.com/images/M/MV5BNTk4NjQ2MTMxNV5BMl5BanBnXkFtZTgwOTY3MjQ0NDE@._V1_.jpg"
  },
  {
    id: "m-3",
    url: "https://www.imdb.com/title/tt4154756/?ref_=nv_sr_4",
    shopId: "s-102",
    shop: "Infinity War",
    product: "Infinity War",
    currentPrice: 290,
    oldPrice: 490,
    picture:
      "https://m.media-amazon.com/images/M/MV5BMjI5ODQwMjg5N15BMl5BanBnXkFtZTgwMTk2Njk5NDM@._V1_SX1777_CR0,0,1777,937_AL_.jpg"
  }
];

class Discount extends Component {
  render() {
    const data = dataSource;
    return (
      <div className="discount">
        <a
          className="discount__header"
          href="https://jacobhsu.github.io/react-web-app/"
        >
          <span className="discount__title">超值特惠</span>
          <span className="discount__more">更多優惠</span>
          <span className="discount__arrow" />
        </a>
        <div className="discount__content">
          {data.map((item, index) => {
            return (
              <Link
                key={item.id}
                to={`/react-web-app/detail/${item.id}`}
                className="discount__item"
              >
                <div className="discount__itemPic">
                  <img
                    width="100%"
                    height="100%"
                    src={item.picture}
                    alt="itemPic"
                  />
                </div>
                <div className="discount__itemTitle">{item.shop}</div>
                <div className="discount__itemPriceWrapper">
                  <ins className="discount__itemCurrentPrice">
                    {item.currentPrice}
                  </ins>
                  <del className="discount__itemOldPrice">{item.oldPrice}</del>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discount;
