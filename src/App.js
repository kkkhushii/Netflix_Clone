import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage'
import Exchanges from './components/Exchanges'
import Cryptocurrencies from './components/Cryptocurrencies'
import CryptoDetails from './components/CryptoDetails'
import News from './components/News';
import './Home.css';

function App() {
  return (
    <div  className="app">
      <div className="navbar">
        <Navbar/>

      </div>
      <div className="main">
      <Layout>
        <div className="routes">
       
       
           <Routes>
            
           <Route path="/" element={<Homepage/>}/>
           <Route path="/exchanges" element={<Exchanges/>}/>
           <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
           <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
           <Route path="/news" element={<News/>}/>

           </Routes>
        </div>
        </Layout>
        <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
          <NavLink to="/">
            Cryptoverse Inc.
          </NavLink> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <NavLink className="footer_link" to="/">Home</NavLink>
          {/* <NavLink to="/exchanges">Exchanges</NavLink> */}
          <NavLink className="footer_link"  to="/news">News</NavLink>
        </Space>
      </div>
      </div>     
  </div>
  );

}

export default App;
// https://github.com/adrianhajdin/project_cryptoverse
// https://blog.openreplay.com/leverage-data-from-rapidapi-using-redux-toolkit
