//rowIndex,pageSize 作為查詢參數  
export default {
  getProductList: (rowIndex, pageSize) => `/mock/product/likes.json?rowIndex=${rowIndex}&pageSize=${pageSize}`,
};
