import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import "./styles/style.css";

const App = () => {
  // let [myName, setMyName] = useState("吳小熊");

  // const buttonHandler = () => {
  //   setMyName("吳大熊");
  // };

  // // 內部function在畫面渲染時會先執行一次，每當[myName]變更時function又會再執行一次
  // useEffect(() => {
  //   console.log("useEffect內部的function正在被執行");
  // }, [myName]);

  return (
    // <div>
    //   <h1>{myName}</h1>
    //   <button onClick={buttonHandler}>改變姓名</button>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
