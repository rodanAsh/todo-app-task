import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import todoSlice from './todoSlice'
import themeSlice from './themeSlice'

const store = configureStore({
    reducer: {
        todo: todoSlice,
        auth: authSlice,
        theme: themeSlice
    }
})

export default store;