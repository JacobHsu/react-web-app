# react-web-app

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