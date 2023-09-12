import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./slices/articleSlice";
const store=configureStore({
    reducer:{
        articleUrls:articleSlice,
    }
})
export default store;