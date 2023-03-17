import React,{useState,useEffect} from 'react'
import  {useGetCryptosQuery} from '../Services/cryptoApi'
import { NavLink } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import Loader from './Loader'
function Cryptocurrencies({simplified}) {

  const count =simplified ? 10 : 100;
  //data name change cryptolist
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  //this chnage after serch 
   const [cryptos, setCryptos] = useState();


  console.log("All coins",cryptos);


  //for searching 
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  if(isFetching) return <Loader/>;
  return (
    <>
    {/* serch bar home page ma aavto to aene remove karva jo 10 aetle ke simplified data hase to search nai aave naito aavse 
    search cryptocurrency na page ma aavse*/}
    {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
    {/* gutter topbottom space 32 eftright space 32 */}
    <Row gutter={[32, 32]} className="crypto-card-container">
    {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid} >

            <NavLink key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable>
                <p>Price: {currency.price}</p>
                <p>Market Cap: {currency.marketCap}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </NavLink>
          </Col>
        ))}
    </Row>
    
    </>

  )
}

export default Cryptocurrencies