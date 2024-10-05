import {configureStore} from "@reduxjs/toolkit";
import hackjiReducer from "../features/hackji/hackjiSlice.js"

const store= configureStore({
    reducer: hackjiReducer,
})

export default store;