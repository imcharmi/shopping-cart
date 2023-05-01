import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    iteams:[],
    loading:false,
    error:null
}

export const Productsfetch=createAsyncThunk("products/Productsfetch",async(id=null,{rejectWithValue})=>{
    try{
        const response= await axios.get("http://localhost:5000/products")
        return response?.data
    }catch(error){
        //this is used to create a customise error
        return rejectWithValue("an error occured")
    }
   
})

const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
        [Productsfetch.pending]:(state)=>{
            state.loading=true
        },
        [Productsfetch.fulfilled]:(state,action)=>{
            state.loading=false
            state.iteams=action.payload
        },
        [Productsfetch.rejected]:(state,action)=>{
            state.loading=false
            state.error = action.payload
        }
    }
})

export default productsSlice.reducer