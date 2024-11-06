import { createSlice } from "@reduxjs/toolkit";

export const countactSlice = createSlice({
    name: 'countact',

    initialState: {
        countacts:[]

    },

    reducers: {
    addToCountact(state , action){
        state.countacts.push(action.payload)
        // console.log(state.countacts.push(action.payload));
        
    },
    
    deleteCountact(state, action){
        state.countacts = state.countacts.filter((countact) => countact.id !== action.payload)
        
    },
    editCountact(state, action){
            const index = state.countacts.findIndex((countact) => countact.id === action.payload.id)
            state.countacts[index] = action.payload
    },
    

    }
})

export const {  addToCountact, deleteCountact, editCountact} = countactSlice.actions