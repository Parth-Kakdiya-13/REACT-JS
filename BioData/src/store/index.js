import { configureStore } from '@reduxjs/toolkit';
import tempalteSlice from './template-slice';
import customSlice from './custome-slice'

const store = configureStore({
    reducer: { template: tempalteSlice, custome: customSlice }
})

export default store;