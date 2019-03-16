import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ErrorToast from "../../components/ErrorToast";
import { actions as appActions, getError } from "../../redux/modules/app";
import Home from "../Home";
import ProductDetail from "../ProductDetail";


class App extends Component {
  render() {
    const {
      error,
      appActions: { clearError }
    } = this.props;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/detail/:id" component={ProductDetail} />
            <Route path="/" component={Home} />
          </Switch>
        </Router> 
        {error ? <ErrorToast msg={error} clearError={clearError} /> : null}
      </div>
    );
  }
}

// 常見的容器型組件模板式代碼 分別從redux狀態管理層　獲取　容器型組件要用的state和action方法
const mapStateToProps = (state, props) => {
  return {
    error: getError(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //bindActionCreators將　appActions進行進一步包裝　在容器型組件使用時　可以直接發送對應的Action　不需要再調用dispatch的方法來發送
    //bindActionCreators的作用是將一個或多個action和dispatch組合起來生成mapDispatchToProps需要生成的內容。把actions和dispatch合併
    appActions: bindActionCreators(appActions, dispatch)
  };
};

//使用 React Redux 提供的 connect() function 產生 container component 而非手動寫成
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
