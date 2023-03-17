import React,{useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { NavLink,useNavigate,useParams } from 'react-router-dom';
import {DEL,ADD,DECREMENT} from '../Action/action'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';





function Carddetail() {
  const getdata = useSelector((state) => state.cardreducer.carts);


   const [datas,setData] = useState([]);
   console.log(datas);

  //  const getdata = useSelector((state) => state.cardreducer.carts);
  // console.log(getdata);

  const {id}=useParams();
  // console.log("itemid"+id);

  const dispatch=useDispatch();
  const path=useNavigate();



   const comparedata=()=>
   {
        const compare=getdata.filter((curval)=>{
           return(
             curval.id == id
           );
        })
         setData(compare);
   }
   useEffect(()=>
   {
    comparedata();
   },[id])


   const removecart=(id)=>{
    dispatch(DEL(id));
    path("/");
}

//increment qty 
const send= (e) =>
{
   dispatch(ADD(e));
}
//decrement qty
const  dec_qty =(item)=>
{
    dispatch(DECREMENT(item));
}

  return (
    <>
    <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>

     
          <div className="iteamsdetails">
          {
            datas.map((e)=>{
              return(
                <>
                 <div className="items_img">
                
                <img src={e.imgdata} alt="" />
              </div>
  
              <div className="details">
                <Table>
                  <tr>
                    <td>
                      <p> <strong>Restaurant:</strong>{e.rname}</p>
                      <p> <strong>Price</strong>  : ₹{e.price}</p>
                      <p> <strong>Dishes</strong>  :{e.address} </p>
                      <p> <strong>Total</strong>  :₹ {e.price * e.qnty}  </p>
                      <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                      <span style={{fontSize:24}}  onClick={e.qnty <=1?()=>removecart(e):()=>dec_qty(e)}>-</span>
                      <span style={{fontSize:22}}>{e.qnty}</span>
                      <span style={{fontSize:24}} onClick={()=>send(e)}>+</span>
  
                      </div>
  
                    </td>
                    <td>
                      <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> {e.rating}★	</span></p>
                      <p><strong>Order Review :</strong> <span >{e.somedata	}</span></p>
                      <p><strong>Remove :</strong> <span ><DeleteIcon  onClick={()=>removecart(e.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></DeleteIcon>	</span></p>
                    </td>
                  </tr>
                </Table>
              </div>
            
                </>
              )
            })
          }
         
                
              
          </div>
        </section>
      </div>
    
    
    </>
  )
}

export default Carddetail;