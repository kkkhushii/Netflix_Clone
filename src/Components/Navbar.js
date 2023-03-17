import React,{ useState, useEffect } from 'react'
import {  Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../image/cryptocurrency.png'
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';


function Navbar() {
  //by default pc menu chhe sidebar
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

     return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);

    }
  }, [screenSize]);
  //when click outside or click any body than close the navbar
//  window.addEventListener('click', (e) => {
//    if (e.target.closest('.main')) {
//      setActiveMenu(false);
//    }
//});

  return (
    <div className="nav-container">
       <div className="logo-container">
       <Avatar src={icon} size="large" />
       
        <Typography.Title level={2} className="logo">
            <NavLink to="/" >Cryptoverse</NavLink>
            </Typography.Title>
       {/*<button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined/></button>*/}
       <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)} >{activeMenu ?  <CloseIcon style={{color:"#000"}}/> : <MenuOutlined style={{color:"#000"}} /> }</Button>
      
        </div>  
        {activeMenu && (
         <Menu theme="dark">
         <Menu.Item icon={<HomeOutlined />}>
          <NavLink  to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <NavLink to="/cryptocurrencies" >Cryptocurrencies</NavLink>
        </Menu.Item>
        {/* <Menu.Item icon={<MoneyCollectOutlined />}>
          <NavLink to="/exchanges">Exchanges</NavLink>
        </Menu.Item> */}
        <Menu.Item icon={<BulbOutlined />}>
          <NavLink to="/news" >News</NavLink>
        </Menu.Item>
      </Menu>
        )}
    </div>
       
  )
}

export default Navbar