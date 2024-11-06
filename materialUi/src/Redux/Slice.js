import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "slice",
    initialState : {
        value : 0
    },
    reducers : {
        increment(state) {
            state.value += 10
        },
        decrement(state) {
            state.value -= 10
        }
    }
})

export const { increment, decrement} = counterSlice.actions
