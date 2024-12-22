import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../state/counter/counterSlice";
import todoSlice from "../state/todo/todoSlice";


export default configureStore({
    reducer: {
        counter : counterSlice,
        todo : todoSlice
    },
})