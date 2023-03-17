// import { type } from "@testing-library/user-event/dist/type"

export const ADD =(item)=>
{
     return{
        type: "ADD_CART",
        payload:item
     }

}
export const DEL =(id)=>
{
     return{
        type: "RMV_CART",
        payload:id
     }

}
//decremtny qty

export const DECREMENT =(item)=>
{
     return{
        type: "DEC_QTY",
        payload:item
     }

}