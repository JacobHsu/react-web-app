import React, { Component } from "react";
import './style.css';

const data = [
  {
    id: 1,
    keyword: "電影",
    quantity: 2019
  },
  {
    id: 2,
    keyword: "電影 動作片",
    quantity: 170
  },
  {
    id: 3,
    keyword: "電影 愛情片",
    quantity: 99
  },
  {
    id: 4,
    keyword: "電影 科幻片",
    quantity: 201
  },
  {
    id: 5,
    keyword: "電影 奇幻片",
    quantity: 101
  }
];

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  render() {
    return (
      <div className="searchBox">
        <div className="searchBox__container">
          <input
            className="searchBox__text"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
          <span className="searchBox__clear" onClick={this.handleClear} />
          <span className="searchBox__cancel" onClick={this.handleCancel}>
            取消
          </span>
        </div>
        {this.state.inputText.length > 0 ? this.renderSuggestList() : null}
      </div>
    );
  }

  renderSuggestList() {
    return (
      <ul className="searchBox__list">
        {data.map(item => {
          return (
            <li className="searchBox__item">
              <span className="searchBox__itemKeyworkd">{item.keyword}</span>
              <span className="searchBox__itemQuantity">
                約{item.quantity}個結果
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  handleChange = e => {
    this.setState({
      inputText: e.target.value
    });
  };

  handleClear = () => {
    this.setState({
      inputText: ""
    });
  };

  handleCancel = () => {};
}

export default SearchBox;
