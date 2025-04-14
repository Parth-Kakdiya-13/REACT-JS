import { createSlice } from '@reduxjs/toolkit';
import { notificationAction } from './notification';


export const loginUser = (response) => {
    return async (dispatch) => {
        try {
            const { token, userId, role } = response.data;
            dispatch(authAction.login({ token, userId, role }));
            localStorage.setItem("token", token)
            localStorage.setItem("userId", userId)
            localStorage.setItem("role", role)
            dispatch(notificationAction.displayNotification(response.data.message))
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Login failed";
            dispatch(notificationAction.displayNotification(errorMsg))
        }
    }
}

export const logoutHandler = () => {
    return async (dispatch) => {
        try {
            dispatch(authAction.logout());
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
            localStorage.removeItem("role")
            dispatch(notificationAction.displayNotification("Logout Success"))
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Logout failed";
            dispatch(notificationAction.displayNotification(errorMsg))
        }
    }
}


const authSlice = createSlice({
    name: "auth",
    initialState: { token: localStorage.getItem('token'), userId: localStorage.getItem('userId'), role: localStorage.getItem('role') },
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.role = action.payload.role
        },
        logout(state) {
            state.token = "";
            state.userId = "";
        },
    }

});

export const authAction = authSlice.actions;

export default authSlice.reducer;