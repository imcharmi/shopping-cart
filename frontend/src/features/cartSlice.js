import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState={
    cartiteams:localStorage.getItem("cartIteam") ? 
        JSON.parse(localStorage.getItem("cartIteam")):[],
    cartTotalQuantity:0,
    carttotalAmount:0
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart(state,action){
            const sameindex=state.cartiteams.findIndex((index)=>index.id===action.payload.id)
            if(sameindex>=0){
                state.cartiteams[sameindex].cartTotalQuantity+=1
                toast.info(`Added one more ${action.payload.name} to cart`,{
                    position:"bottom-right"
                })
            }else{
                const tempProduct={...action.payload,cartTotalQuantity:1}
                state.cartiteams.push(tempProduct)
                toast.success(`Added ${action.payload.name} to cart`,{
                    position:"bottom-right"
                })   
            }
            localStorage.setItem("cartIteam",JSON.stringify( state.cartiteams))           
        },
        removefromcart(state,action){
            const nextcartIteams=state.cartiteams.filter(cart=>cart.id !== action.payload.id )
            state.cartiteams=nextcartIteams
            localStorage.setItem("cartIteam",JSON.stringify( state.cartiteams))
        },
        increaseNum(state,action){
            const sameindex=state.cartiteams.findIndex((index)=>index.id===action.payload.id)
            state.cartiteams[sameindex].cartTotalQuantity+=1   
            localStorage.setItem("cartIteam",JSON.stringify( state.cartiteams))        
        },
        decreaseNum(state,action){
            const sameindex=state.cartiteams.findIndex((index)=>index.id===action.payload.id)
            state.cartiteams[sameindex].cartTotalQuantity-=1      
            localStorage.setItem("cartIteam",JSON.stringify( state.cartiteams))
        
        },
        clearCart(state){
            state.cartiteams=[]
            localStorage.setItem("cartIteam",JSON.stringify( state.cartiteams))
        },
        getsubtotal(state){
            let {total , quantity}=state.cartiteams.reduce((cartTotal , cartiteams)=>{
                const {cartTotalQuantity , price}=cartiteams
                const iteamtotal = price * cartTotalQuantity
                
                cartTotal.total += iteamtotal
                cartTotal.quantity +=cartTotalQuantity

                return cartTotal
            },{
                total:0,
                quantity:0
            })
            state.carttotalAmount = total
            state.cartTotalQuantity =quantity
        }
    }
})

export default cartSlice.reducer
export const { addtoCart , removefromcart , increaseNum , decreaseNum, clearCart , getsubtotal} =cartSlice.actions