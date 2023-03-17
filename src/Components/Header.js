import React, { useEffect, useState } from 'react';
import './Style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';
import { NavLink,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import {DEL} from '../Action/action'
import Button from 'react-bootstrap/Button';










function Header() {
  const getdata = useSelector((state) => state.cardreducer.carts);
  console.log(getdata);

  const [price,setprice]=useState(0)
  
  const id=useParams();
  console.log(id);
  const dispatch=useDispatch();

  //menu item from mui
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   const removecart=(id)=>{
        dispatch(DEL(id))
   }
   const total=()=>
   {
    let price=0;
    getdata.map((e)=>{
    
      
        // price=e.price+price;
         price=e.price*e.qnty+price;
         
      })
   setprice(price);
   }
   useEffect(()=>{
     total();
  },[total])


  return (
    <>
      {/* // navbar from bootstrap */}
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          {/*<NavLink to="/" className={"text-decoration-none"}>Add To Cart  |</NavLink>*/}


          <Nav className="me-auto">
            <NavLink to="/" className={"text-decoration-none"} >Home</NavLink>
          </Nav>
          <Badge badgeContent={getdata.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <LocalMallIcon  className={"shopingcarticon"} style={{ color: "white", fontSize: "25px", cursor: "pointer" }} />
          </Badge>

        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {/* add to cart kariye ne data hoy tyare cart ma dekhay */}

          {
            getdata.length ?
              <div className='card_details' style={{ width: "24rem", padding: 10,height:"24 0px" }}>
                <Table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((item) => {
                        return (
                          <>
                            <tr>

                              <td>
                              <NavLink to={`/cart/${item.id}`}  onClick={handleClose} >
                                <img src={item.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                                </NavLink>
                                </td>
                              <td>
                                <p>{item.rname} </p>
                                <p>Price :₹ {item.price}</p>
                                <p>Qty:{item.qnty}</p>
                                {/* <p> <DeleteIcon className='smalltrash' style={{color:"red",fontSize:23,cursor:"pointer"}}/></p> */}
                              </td>
                              <td>
                              <DeleteIcon  className='largetrash' onClick={()=>removecart(item.id)} style={{color:"red",fontSize:23,cursor:"pointer"}}/>
                              </td>
                            </tr>
                          </>
                        )
                      }
                      )
                    }
                <p className='text-center'>total:₹{price}</p>
             
                  </tbody>

                </Table>

              </div> :
              <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "19rem", height: "3rem", padding: 10, position: "relative" }}>
                <CloseIcon onClick={handleClose}
                  style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }} />
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="empty cart" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
              </div>
          }
          {/* cart empty hoy tyare
       <div className='card_details d-flex justify-content-center align-items-center' style={{width:"19rem",height:"3rem",padding:10,position:"relative"}}>
                     <CloseIcon onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}/>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="empty cart" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div> */}
        </Menu>
      </Navbar>




    </>
  )
}

export default Header