import { get } from "../../utils/request";

//經過中間件處理的action所具有的標識
export const FETCH_DATA = "FETCH DATA";

//next 代表當前中間件的下一個中間件所提供的dispatch方法
export default store => next => action => {
  const callAPI = action[FETCH_DATA];
  if (typeof callAPI === "undefined") {
    return next(action);
  }

  const { endpoint, schema, types } = callAPI;
  if (typeof endpoint !== "string") {
    throw new Error("endpoint必須為字符串類型的URL");
  }
  if (!schema) {
    throw new Error("必須指定領域實體的schema");
  }
  if (!Array.isArray(types) && types.length !== 3) {
    throw new Error("需要指定一個包含了3個action type的數組");
  }
  if (!types.every(type => typeof type === "string")) {
    throw new Error("action type必須為字符串類型");
  }

  //增強版action使其包含額外參數
  const actionWith = data => {
    const finalAction = {...action, ...data} //在原有基礎上，擴展data
    delete finalAction[FETCH_DATA] //在往後傳遞不需要 這一層級屬性刪除
    return finalAction
  }

  const [requestType, successType, failureType] = types;

  next(actionWith({ type: requestType })); //有一個請求即將被發送
  //傳入請求的url 數據實體schema
  return fetchData(endpoint, schema).then(
    response =>
      next(
        actionWith({
          type: successType,
          response
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || "獲取數據失敗"
        })
      )
  );
};

//執行網路請求
const fetchData = (endpoint, schema) => {
  return get(endpoint).then(data => {
    return normalizeData(data, schema);
  });
};

//根據schema, 將獲取的數據扁平化處理
const normalizeData = (data, schema) => {
  const { id, name } = schema;
  let kvObj = {}; //kv key value
  let ids = []; //存取到數據所獲取的每一項id
  if (Array.isArray(data)) {
    data.forEach(item => {
      kvObj[item[id]] = item;
      ids.push(item[id]);
    });
  } else { //不是Array類型 只是一個對象
    kvObj[data[id]] = data;
    ids.push(data[id]);
  }
  return {
    [name]: kvObj, //掛載到name屬性下 name代表不同領域實體的名字 例如獲取products時 name是products
    ids
  };
};
