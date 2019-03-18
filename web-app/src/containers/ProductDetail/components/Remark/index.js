import React, { Component } from "react";
import './style.css';

class Remark extends Component {
  render() {
    return (
      <div className="remark">
        <div className="remark__header">
          購買須知
          <i className="remark__icon" />
        </div>
        <div className="remark__list">
          <dl className="remark__item">
            <dt className="remark__itemTitle">有效期</dt>
            <dd className="remark__itemDesc">終生有效</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">除外日期</dt>
            <dd className="remark__itemDesc">無</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">使用時間</dt>
            <dd className="remark__itemDesc">啟用即可使用</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">預約提醒</dt>
            <dd className="remark__itemDesc">
              無需預約
            </dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">規則提醒</dt>
            <dd className="remark__itemDesc"></dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Remark;
