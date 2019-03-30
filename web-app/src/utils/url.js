//rowIndex,pageSize 作為查詢參數  
export default {
  //path 不同資源的類型 eg:likes
  getProductList: (path, rowIndex, pageSize) => `/mock/product/${path}.json?rowIndex=${rowIndex}&pageSize=${pageSize}`,
  getProductDetail: (id) => `/react-web-app/mock/product_detail/${id}.json`,
  getShopById: (id) => `/mock/shops/${id}.json`
};
