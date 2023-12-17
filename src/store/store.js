import {configureStore} from "@reduxjs/toolkit";
import { todoSlice } from "../featuers/todo/todoSlice";

export const store = configureStore({
    reducer: {
        todos:todoSlice.reducer
    }
})

