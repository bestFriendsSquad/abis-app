import {createAsyncThunk} from "@reduxjs/toolkit";
import {authApi} from "../../api/api";
import { AsyncStorage } from 'react-native';
import {setPersonalData} from "./userSlice";


export const auth = createAsyncThunk(
    'user/auth',
    async function(authData, {rejectWithValue}){
        try {
            const data = await authApi.auth( authData )
            await AsyncStorage.setItem('user_id', data.id)
            await AsyncStorage.setItem('user', data)

            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const register = createAsyncThunk(
    'user/register',
    async function(registerData, {rejectWithValue}){
        try {
            const data = await authApi.register( registerData )
            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


export const fetchNotifications = createAsyncThunk(
    'user/fetchNotifications',
    async function(_, {rejectWithValue}){
        try {
            const data = await authApi.fetchNotifications(  )
            return data
        }catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const setPersonalDataFromAsyncStorage = createAsyncThunk(
    'user/setPersonalDataFromAsyncStorage',
    async function(_, dispatch){
        const personalData = await AsyncStorage.getItem('user')
        dispatch(setPersonalData(personalData) )
    }
)
