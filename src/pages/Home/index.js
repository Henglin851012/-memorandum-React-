import { useState, useEffect } from "react";
import Edit from "./component/Edit"; //將會用到的元件插入
import List from "./component/List";

//宣告主鍵
const Home = () => {
  //用一個set去接要改變的值,才能讓網頁知道要重新渲染
  const [data, setData] = useState([]);

  //className是設定好的css
  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
