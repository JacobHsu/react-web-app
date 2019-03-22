This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Redux

Redux 默認不支持，異步 action，但網路請求勢必遇到  
網路請求層的基礎封裝，有較多的模板代碼需要輸寫，可使用 redux 中間件封裝  
redux/middleware/api.js  
redux/modules/home.js redux/modules/entities/product.js  
最後一步 將中間件添加到 redux store 中

首頁需要數據管理的是 超值特惠 和 猜你喜歡 組件  其他是靜態組件展示
數據均為產品相關 redux/modules/entities/product  
猜你喜歡 有分頁加載 要保存分頁訊息  

商品詳情頁 商品詳情 店家訊息

note: 處理state定義 處理actions定義 處理reducer定義 

###　通用錯誤處理

有了狀態模塊　 redux/modules/app.js
有了對應錯誤顯示的組件　 components/ErrorToast/index.js
透過容器組件連接起來　 containers/App/index.js App 是最外層應用的根組件　錯誤訊息是全局展示的

## 展示型組件 和 容器行組件

Redux 的 React 綁定擁抱了分離 presentational 和 container component 的概念。  
UI 組件負責 UI 的呈現，容器組件負責管理數據和邏輯。  

|    | Presentational Components      |  Container Components |
|----------|:-------------:|------:|
| 用途 |  怎麼看事情（markup, styles) | 怎麼做事情 (抓資料, 更新 state) |
| 意識到Redux |    否   |   是 |
| 取得資料 | 從 props 讀取資料 |  訂閱 Redux state |
| 改變資料 | 從 props 呼叫 callback |  Dispatch Redux action |
| 從哪被寫入 | 經由手動 |    通常由 React Redux 產生 |

我們大多數是寫 presentational component，但我們將需要產生一些 container component 來連結 Redux store。

雖然技術上來說你可以使用 `store.subscribe()` 來手動寫 container component，但我們不建議你這樣做，因為 React Redux 有做許多手寫難以達成的效能優化。因此，我們以下將使用 React Redux 提供的 `connect()` function 產生 container component 而非手動寫成。

ex : `container/App/index.js` export default connect

[Presentational 和 Container Component](https://chentsulin.github.io/redux/docs/basics/UsageWithReact.html)


### 商品詳情

領域實體: 商品的詳情資訊 店家資訊
動態資料 redux + mock數據  

reducer 抽象封裝至 utils/createReducer  
服務於頁面的實體模塊 modules/entities   

modules/detail: 
state> product,relatedShop
actions (by api)> loadProductDetail,loadShopById
reducers>  product,relatedShop  (combineReducers)

getProductDetail: (id) => `/mock/product_detail/${id}.json`,

modules/entities/products 定義selectors函數 提供getProductDetail獲取商品詳情 判斷是否要api data 

組件連結Redux  
商品詳情的組件和Redux的狀態管理層進行連接 modules/detail 創建selectors函數 供商品詳情頁容器型組件使用  

containers/ProductDetail/index.js 
```js
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
```

mapStateToProps -> getProduct (@ /redux/modules/detail) ->  getProductDetail (@/entities/products)


<ProductOverview data={product}/>
@/components/ProductOverview



componentDidMount(@containers/ProductDetail/index) -> loadProductDetail (@redux/modules/detail) -> fetchProductDetail

`const { product } = this.props;`  this.props 透過api取得mock data 賦值給 product
父 `render() { <ProductOverview data={product}/>`  
子 (@/components/ProductOverview) `this.props.data` 取得mock data  




## Remove

移除 `App.css` create react app默認的樣式

## Note

根目錄(src/components)下定義 loading組件  

# Router

App/index.js
`<Route path="/detail/:id" component={ProductDetail} />`  
`import ProductDetail from "../ProductDetail";`  
containers/ProductDetail/index.js  
`import ProductOverview  from "./components/ProductOverview";`  

# debug

> Attempted import error: 'schema' is not exported from './entities/products' (imported as 'productSchema').
`const schema = {`  -> `export const schema = {` redux/modules/entities/products.js

> Promise {<pending>} [[PromiseValue]]: Object error: "Cannot read property 'id' of undefined"
utils/request.js `if(response.state === 200)` -> `if(response.status === 200) {`
`handleResponse(url, response);` -> `return handleResponse(url, response);` 
Note: middleware api.js 會調用 utils/request.js

> TypeError: Cannot read property 'id' of null
`<ProductOverview data={product}/>` -> `{product && <ProductOverview data={product} />}`
判斷有值再炫染

> redux\modules\entities\products.js:29:13
 export const getProductById = (state, id) => {
A: 報錯在下一個funciont 實際錯誤在上面的function 
```js
 getProductDetail = (state, id) => {
  const product = state.entities.product[id];
```   
少打s
```js
  const product = state.entities.products[id];
```    

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
