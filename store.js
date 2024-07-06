import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./todoSlice"

const store=configureStore({
    reducer:
    {
        todo:myreducer,
    }
 });
 export default store;