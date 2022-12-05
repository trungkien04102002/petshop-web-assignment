import { createSlice } from "@reduxjs/toolkit";


export const cartAddingSlice= createSlice({
    name:'cartAdding',
    initialState:[],
    reducers:{
        addPrd:(state,action)=>{
            state.push(action.payload)
        }
    },
})

export const { addPrd } = cartAddingSlice.actions
export default cartAddingSlice.reducer
