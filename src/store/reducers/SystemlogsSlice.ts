import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IStream} from "../../models/Systems";
import {getSystemLogs} from "./ActionCreators";

interface ISystemSlice{
    systemLogs: IStream[];
    isLoading: boolean;
    error: string;
}

const initialState: ISystemSlice = {
    systemLogs: [],
    isLoading: false,
    error: ''
}

export const systemLogsSlice = createSlice({
    name: "systemLogs",
    initialState: initialState,
    reducers: {},
    extraReducers: builder=>{
        builder
            .addCase(getSystemLogs.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(getSystemLogs.fulfilled,(state, action:PayloadAction<IStream[]>)=>{
                state.isLoading = false;
                state.error = '';
                state.systemLogs = action.payload;
            })
            .addCase(getSystemLogs.rejected,(state,action)=>{
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export default systemLogsSlice.reducer;


