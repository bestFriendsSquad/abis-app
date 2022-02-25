import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from "./user/userSlice";
import bookSlice from "./book/bookSlice";

const rootReducer = combineReducers({
    user: userSlice,
    book: bookSlice
});

const store = configureStore({
    reducer: rootReducer,
})

export default store;