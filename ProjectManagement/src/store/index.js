import { configureStore } from '@reduxjs/toolkit';
import notification from './notification';
import auth from './auth'


const store = configureStore({
    reducer: { notification: notification, auth: auth }
})

export default store