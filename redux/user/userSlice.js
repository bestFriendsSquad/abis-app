import {createSlice} from "@reduxjs/toolkit";
import {endLoading, setError, startLoading} from "../../common/sliceHelpers";
import {auth, fetchNotifications, register} from "./userAsyncThunk";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: null,
        personalData: null,
        notifications: null,
    },
    reducers: {
        setPersonalData(state, action){
            if(action.payload){
                state.personalData = action.payload
            }
        }
    },
    extraReducers: {
        // AUTH
        [auth.pending]: startLoading,
        [auth.fulfilled]: state => state.isLoading = false,
        [auth.rejected]: setError,
        // REGISTER
        [register.pending]: startLoading,
        [register.fulfilled]: endLoading,
        [register.rejected]: setError,
        // NOTIFICATION
        [fetchNotifications.pending]: startLoading,
        [fetchNotifications.fulfilled]: (state, action) => {
            state.isLoading = false
            state.notifications = action.payload
        },
        [fetchNotifications.rejected]: setError
    }
})

export default userSlice.reducer

export const { setPersonalData } = userSlice.actions