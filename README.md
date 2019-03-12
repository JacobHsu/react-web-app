# react-web-app

## page

src/containers/Home/compoents/ `HomeHeader Banner Category Headline Activity Discount LikeList`   
src/components 通用組件　`Footer`

## React

[Create React App](https://reactjs.org/docs/create-a-new-react-app.html)  

```bash
npx create-react-app web-app
cd web-app
npm start
```

components 展示型組件  
containers 容器型組件   

將App.js移到containers App下  重命名index.js   
App.css文件 移到containers App下  
將index.js 引用路徑修改  

# State

狀態 是決定前端應用的展示 與 驅動前端數據流正常工作的核心  
商品(products) 店鋪(shops) 訂單(orders) 評論(comments)  
各頁面UI狀態 
前端基礎狀態 登入態、全局異常訊息  

# Redux 模塊分層

容器組件 -> 頁面狀態 通用前端狀態 -> 領域狀態  
entities 領域狀態模塊  商品(products) 店鋪(shops) 訂單(orders) 評論(comments)    
modules 首頁(home)的UI狀態  商品詳情頁(detail)的UI狀態 通用基礎狀態(app)
index.js 聚合所有UI狀態加領域狀態  

redux/store.js 根據模塊當中已定義 創建最終的store  

入口文件引用使用store
```js
import { Provider } from "react-redux";
import store from "./redux/store";  
```

依賴
```js
"dependencies": {
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.4",
    "redux": "^4.0.0",
    "redux-thunk": "^2.3.0"
  },
```
`$ npm i react-redux react-router-dom redux redux-thunk`  

# References 

category [react-slick](https://github.com/akiran/react-slick): React carousel component   [Auto Play](https://react-slick.neostack.com/docs/example/auto-play) 
`npm i react-slick`  

https://www.flaticon.com/packs/film-industry-14
https://zh.wikipedia.org/wiki/电影类型


# deploy

react-cli `npm run build`  build資料夾  

Deploy [gh-pages](https://www.npmjs.com/package/gh-pages)  
`$ npm install gh-pages --save-dev`

package.json
```js
"homepage": "https://jacobhsu.github.io/react-web-app"

"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

`$ npm run deploy`

### VS Code Reactjs snippets  

Reactjs code snippets `rcc`  