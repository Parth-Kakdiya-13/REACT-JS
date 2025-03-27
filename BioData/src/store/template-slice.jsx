import { createSlice } from "@reduxjs/toolkit";

const initialTemplateState = {
    id: "",
    title: ""
}

const templateSlice = createSlice({
    name: "template",
    initialState: initialTemplateState,
    reducers: {
        selectTemplate(state, action) {
            state.title = action.payload
        }
    }
});

export const tempalteAction = templateSlice.actions;

export default templateSlice.reducer;