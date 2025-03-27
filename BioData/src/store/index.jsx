import { configureStore } from '@reduxjs/toolkit';
import tempalteSlice from '../store/template-slice'

const store = configureStore({
    reducer: { template: tempalteSlice }
})

export default store;