import { createSlice } from "@reduxjs/toolkit";
import {fetchBooks, fetchCurrentBook, fetchFavorite, fetchPopularBooks, toFavorite} from "./bookAsyncThunks";
import {setError, startLoading} from "../../common/sliceHelpers";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: null,
        story: null,
        read: null,
        isLoading: null,
        error: null,
        popularBooks: null,
        currentBook: null,
        favoritesBook: null,
    },
    reducers: {
        handleFavorite(state){
            state.currentBook.like = !state.currentBook.like
        },
        handleBooking(state){
            state.currentBook.busy = !state.currentBook.busy
        },
    },
    extraReducers:{
        // FETCH BOOKS
        [fetchBooks.pending]: startLoading,
        [fetchBooks.fulfilled]: (state, action) => {
            state.isLoading = false
            state.books = action.payload
        },
        [fetchBooks.rejected]: setError,
        //TO FAVORITE
        [toFavorite.rejected]: setError,
        //FETCH FAVORITE
        [fetchFavorite.pending]: startLoading,
        [fetchFavorite.fulfilled]: (state, action) => {
            state.isLoading = false
            state.favoritesBook = action.payload
        },
        [fetchFavorite.rejected]: setError,
        //FETCH POPULAR BOOKS
        [fetchPopularBooks.pending]: startLoading,
        [fetchPopularBooks.fulfilled]: (state, action) => {
            state.isLoading = false
            state.popularBooks = action.payload
        },
        [fetchPopularBooks.rejected]: setError,
        //CURRENT BOOK
        [fetchCurrentBook.pending]: startLoading,
        [fetchCurrentBook.fulfilled]: (state, action) => {
            state.isLoading = false
            state.currentBook = action.payload
        },
        [fetchCurrentBook.rejected]: setError,
    }
})

export default bookSlice.reducer
