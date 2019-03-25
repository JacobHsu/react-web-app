import React, { Component } from "react";
import LikeItem from "../LikeItem";
import Loading from "../../../../components/Loading";
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
  //儲存會發生變化的狀態
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      data: dataSource,
      loadTimes: 1 //加載幾次的標記
    };
    this.removeListener = false;
  }
  render() {
    const { data, loadTimes } = this.state;
    //下拉兩次 加載更多 下拉三次 查看更多
    return (
      <div ref={this.myRef} className="likeList">
        <div className="likeList__header">猜你喜歡</div>
        <div className="likeList__list">
          {data.map((item, index) => {
            return <LikeItem key={index} data={item} />;
          })}
        </div>
        {loadTimes < 3 ? (
          <Loading />
        ) : (
          <a className="likeList__viewAll" href="https://jacobhsu.github.io/react-web-app/">查看更多</a>
        )}
      </div>
    );
  }

  componentDidMount() {
    //透過 props.pageCount 判斷 達到數據緩存作用
    //小於3才監聽scroll事件
    if(this.state.loadTimes < 3) {
      document.addEventListener("scroll", this.handleScroll);
    } else {
      this.removeListener = true;
    }
    //大於0表示加載過，不重覆加載
    if(this.state.loadTimes === 0) { 
      this.props.fetchData();
    }
  }

  componentDidUpdate() {
    if (this.state.loadTimes >= 3 && !this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll); //解除綁定不再監聽事件
      this.removeListener = true;
    }
  }

  componentWillUnmount() {
    //如果沒被超過三次DidUpdate階段事先移除 移除
    if (!this.removeListener) {
      document.removeEventListener("scroll", this.handleScroll);
    }
  }

  //處理螢幕滾動事件，實現加載更多的效果
  handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; //獲取頁面滾動的距離
    const screenHeight = document.documentElement.clientHeight; // 螢幕可視區域高度
    const likeListTop = this.myRef.current.offsetTop; //likeList組件距離頂部頁面距離
    const LikeListHeight = this.myRef.current.offsetHeight; //likeList組件內容高度

    //如果滾動的距離 讓組件內容區域的最底部 呈現在整個可視頁面的最底部 開啟加載更多
    if (scrollTop >= LikeListHeight + likeListTop - screenHeight) {
      const newData = this.state.data.concat(dataSource); //複製數據模擬加載
      const newLoadTimes = this.state.loadTimes + 1;
      setTimeout(() => {
        this.setState({
          data: newData,
          loadTimes: newLoadTimes
        });
      });
    }
  };
}

export default LikeList;
