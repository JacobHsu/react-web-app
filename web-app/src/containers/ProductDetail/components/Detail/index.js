import React, { Component } from "react";
import "./style.css";

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="detail__header">
          <span>商品詳情</span>
          <i className="detail__headerIcon" />
        </div>
        <table cellPadding="0" cellSpacing="0" className="detail__table">
          <tbody>
            <tr className="detail__row">
              <th colSpan="3" className="detail__category">
                電影
              </th>
            </tr>
            <tr className="detail__row">
              <td>Infinity War</td>
              <td className="detail__td--alignRight">1</td>
              <td className="detail__td--alignRight">490元</td>
            </tr>
            <tr className="detail__row">
              <td />
              <td className="detail__td--price">
                原價
                <br />
                <strong className="detail__td--priceNew">優惠價</strong>
              </td>
              <td className="detail__td--price">
                490元
                <br />
                <strong className="detail__td--priceNew">290元</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="detail__remark">Extras</div>
        <div className="detail__more">
          <span>更多幕後特輯</span>
          <span className="detail__notice">
          </span>
          <i className="detail__arrow" />
        </div>
      </div>
    );
  }
}

export default Detail;
