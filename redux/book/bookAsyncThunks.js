import {createAsyncThunk} from "@reduxjs/toolkit";
import {bookApi} from "../../api/api";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async function(params, {rejectWithValue, dispatch, getState }){
        try {
            const data = await bookApi.fetchAllBook(params)
            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const toFavorite = createAsyncThunk(
    'books/toFavorite',
    async function(book_id, {rejectWithValue}){
        try {
            const data = await bookApi.toFavorite(book_id)
            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const fetchFavorite = createAsyncThunk(
    'books/fetchFavorite',
    async function(_, {rejectWithValue}){
        try {
            const data = await bookApi.fetchFavorite()
            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const fetchPopularBooks = createAsyncThunk(
    'book/fetchPopularBook',
    async function(_, {rejectWithValue}){
        try {
            const data = await bookApi.fetchPopularBooks()
            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const fetchCurrentBook = createAsyncThunk(
    'book/fetchCurrentBook',
    async function(id_book, {rejectWithValue}){
        try {
            const data = await bookApi.fetchCurrentBook(id_book)
            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


// export const fetchStory = createAsyncThunk(
//     'books/fetchStory',
//     async function(_, {rejectWithValue}){
//         try {
//             const { data } = await
//         }catch (e) {
//             return rejectWithValue(e.message)
//         }
//     }
//
// )