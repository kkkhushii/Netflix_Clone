import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';
import  {useGetCryptosQuery} from '../Services/cryptoApi'
import { NavLink } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import Loader from './Loader';
function Homepage() {
  const { Title } = Typography;
  const { data:coinsData,isFetching } = useGetCryptosQuery(10);

  const globalStats  = coinsData?.data?.stats;


  //  const [datacoin,setdatacoin]=useState(coindad?.data?.coins);
      console.log("globalStats",globalStats);
    if (isFetching) return <Loader />;

  return (
    <>
    
     <Title level={2}  className="heading">Global Crypto Stats</Title>

     <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Coins" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
   <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><NavLink to="/cryptocurrencies">Show more</NavLink></Title>
      </div>
      {/* //simplified  means only show 10 coins data not hundred simpified by defaut true */}
      <Cryptocurrencies simplified />
    
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><NavLink to="/news">Show more</NavLink></Title>
      </div>
      <News simplified />
    
    </>
  )
}

export default Homepage;