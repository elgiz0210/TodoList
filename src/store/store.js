import {configureStore} from "@reduxjs/toolkit";
import { todoSlice } from "../feathers/todo/todoSlice";

export const store = configureStore({
    reducer: {
        todos:todoSlice.reducer
    }
})

