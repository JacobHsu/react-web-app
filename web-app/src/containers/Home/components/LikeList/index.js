import React, { Component } from "react";
import LikeItem from "../LikeItem";
import "./style.css";

const dataSource = [
  {
    id: "m-1",
    shopId: "s-1",
    name: "Captain America: Civil War",
    tag: "",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UY190_CR0,0,128,190_AL_.jpg",
    genre: "Action | Adventure | Sci-Fi",
    currentPrice: 190,
    oldPrice: 290,
    year: "2016"
  },
  {
    id: "p-2",
    shopId: "s-2",
    name: "Doctor Strange",
    tag: "",
    picture:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UY190_CR0,0,128,190_AL_.jpg",
    genre: "Action | Adventure | Fantasy",
    currentPrice: 190,
    oldPrice: 290,
    year: "2016"
  },
  {
    id: "p-3",
    shopId: "s-3",
    name: "Guardians of the Galaxy",
    tag: "",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UY190_CR0,0,128,190_AL_.jpg",
    genre: "Action | Adventure | Comedy",
    currentPrice: 190,
    oldPrice: 290,
    year: "2014"
  },
  {
    id: "p-4",
    shopId: "s-4",
    name: "Thor: Ragnarok",
    tag: "",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UY190_CR0,0,128,190_AL_.jpg",
    genre: "Action | Adventure | Comedy",
    currentPrice: 190,
    oldPrice: 290,
    year: "2017"
  },
  {
    id: "p-5",
    shopId: "s-5",
    name: "Black Panther",
    tag: "",
    picture:
      "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UY190_CR0,0,128,190_AL_.jpg",
    genre: "Action | Adventure | Sci-Fi",
    currentPrice: 190,
    oldPrice: 290,
    year: "2018"
  }
];

class LikeList extends Component {
  render() {
    const data = dataSource;
    return (
      <div className="likeList">
        <div className="likeList__header">猜你喜歡</div>
        <div className="likeList__list">
          {data.map((item, index) => {
            return <LikeItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default LikeList;
