import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './Cardsdata';
import "./Style.css";
import Cardsdetail from './Carddetail';
import { useDispatch } from 'react-redux';
import { ADD } from '../Action/action';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function Cards() {

  const [data, setData] = useState(Cardsdata);
  const [isAdded, setIsAdded] = useState(false);
  // console.log(data);


  const dispatch=useDispatch();
  const send= (e) =>
  {
     dispatch(ADD(e));

  }
 

  return (

    <>

      <div className='container mt-3' >
        <h2 className='text-center'>Add to Cart Project</h2>

        <div className="row d-flex justify-content-center align-items-center">
          {
            data.map((item, index) => {
              return (
                <Card style={{ width: '18rem', border:'none'}} className='mx-2 mt-4'  >
                  <Card.Img  className="bg-image hover-zoom"variant="top" src={item.imgdata} style={{height:'180px'}} />
                  <Card.Body>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>
                      Price:₹{item.price}
                    </Card.Text>
                    <Button  variant="primary" className={"addcartbtn"} onClick={()=>send(item)} style={{width:'100%'}}>Add to cart</Button>

                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
        <p className="footerText" style= {{textAlign: 'center', marginTop:'22px'}}>
          Made with 💓 by <b>Khushi Joshi</b></p>
      </div>
    </>
  )
}

export default Cards;