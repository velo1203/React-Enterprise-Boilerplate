import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
import authSlice from "../features/auth/authSlice";

const rootReducer = combineReducers({
    todo: todoSlice,
    auth: authSlice,
});

export default rootReducer;
