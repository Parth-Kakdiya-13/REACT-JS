import { createSlice } from "@reduxjs/toolkit";


const notification = createSlice({
    name: "notification",
    initialState: { status: false, message: "" },
    reducers: {
        displayNotification(state, action) {
            state.status = true;
            const message = action.payload;
            console.log(message)
            state.message = message;
        },
        hideNotification(state) {
            state.status = false;
            state.message = "";
        }
    }
});

export const notificationAction = notification.actions

export default notification.reducer