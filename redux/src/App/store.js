import {configureStore} from "@reduxjs/toolkit"; 
import { todoSlice } from "../features/todoo/todoSlice";


export const Store = configureStore({
    reducer : {
        todo : todoSlice.reducer
    }
}); 
