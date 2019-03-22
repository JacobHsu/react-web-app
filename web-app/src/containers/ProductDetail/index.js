import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ProductOverview from "./components/ProductOverview";
import ShopInfo from "./components/ShopInfo";
import Detail from "./components/Detail";
import Remark from "./components/Remark";
import BuyButton from "./components/BuyButton";
import Header from "../../components/Header";
import {
  actions as detailActions,
  getProduct,
  getRelatedShop
} from "../../redux/modules/detail";

class ProductDetail extends Component {
  render() {
    // this.props  output detail combineReducers
    const { product } = this.props;  
    return (
      <div>
        <Header title="商品詳情" onBack={this.handleBack} grey />
        {product && <ProductOverview data={product} />}
        <ShopInfo />
        <Detail />
        <Remark />
        <BuyButton />
      </div>
    );
  }

  componentDidMount() {
    const { product } = this.props;
    //組件掛載時候，不具備商品訊息，請求資料
    if (!product) {
      const productId = this.props.match.params.id;
      this.props.detailActions.loadProductDetail(productId);
    } else if (!this.props.relatedShop) {
      //組件掛載時候，不具備店家訊息，請求資料
      this.props.detailActions.loadShopById(product.nearestShop);
    }
  }

  componentDidUpdate(preProps) {
    // 第一次獲取到產品詳情時，需要繼續獲取關聯的店家訊息 (else if 未執行)
    // 前一次product資料不存在 而且 當前更新的product資料存在
    if (!preProps.product && this.props.product) {
      this.props.detailActions.loadShopById(this.props.product.nearestShop);
    }
  }

  handleBack = () => {
    this.props.history.goBack(); //react router  
  };
}

const mapStateToProps = (state, props) => {
  // http://localhost:3000/detail/:id
  const productId = props.match.params.id; //react router提供的商品ID
  return {
    product: getProduct(state, productId),
    relatedShop: getRelatedShop(state, productId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    detailActions: bindActionCreators(detailActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);

//export default ProductDetail;
