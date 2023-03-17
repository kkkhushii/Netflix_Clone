const INITIAL_STATE =
{
    carts: []

};

export const cardreducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const findindexinc=state.carts.findIndex((e)=>
                e.id == action.payload.id)
                if(findindexinc >= 0)
                {
                    state.carts[findindexinc].qnty +=1;
                }
                else
                {
                    const temp={...action.payload,qnty:1}
                    return {
                            ...state,
                            carts: [...state.carts, temp]
                        }
                }
            // return {
            //     ...state,
            //     carts: [...state.carts, action.payload]
            // }
            case "RMV_CART":
                let data=state.carts.filter((e)=>
                          e.id !== action.payload);
                return{
                     ...state,
                     carts:data
                }      
                case  "DEC_QTY":
                   const findindexdec=state.carts.findIndex((e)=> e.id== action.payload.id);
                   if(state.carts[findindexdec].qnty >= 1)
                   {
                     const delitem = state.carts[findindexdec].qnty -=1;
                     console.log([...state.carts,delitem]);
                    return{
                        ...state,
                         carts:[...state.carts]
                    }
                   }

        default:
            return state
    }

} 
