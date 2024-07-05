import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./todosclice"

const store=configureStore({
    reducer:
    {
        todo:myreducer,
    }
 });
 export default store;