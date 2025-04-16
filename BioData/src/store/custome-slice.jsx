import { createSlice } from "@reduxjs/toolkit";


const customeSlice = createSlice({
    name: "custome",
    initialState: {
        background: "",
        heading: "",
        text: "",
        value: ""
    },
    reducers: {
        getBackground(state, action) {
            state.background = action.payload
        },
        getHeading(state, action) {
            state.heading = action.payload
        },
        getText(state, action) {
            state.text = action.payload

        },
        getValue(state, action) {
            state.value = action.payload
        }
    }
})

export const customeAction = customeSlice.actions

export default customeSlice.reducer;