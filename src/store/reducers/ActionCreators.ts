import axios, {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IStream, IStreamSwitches, ISystems} from "../../models/Systems";

export const getSystems = createAsyncThunk(
    'systems/getSystems',
    async (_, thunkAPI) =>{
        try {
            const response = await axios.get<ISystems[]>("/api/systems");
            return response.data;
        }catch (e) {
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)

export const getSystemLogs = createAsyncThunk(
    'systems/getSystemLogs',
    async (_, thunkAPI) =>{
        try {
            const response = await axios.get<IStream[]>("/api/system_logs");
            return response.data;
        }catch (e) {
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)

export const postSystemStreams = createAsyncThunk(
    'systems/postSystemStreams',
    async ({systemId,checkedStreams}:{systemId:number,checkedStreams:Record<string, undefined|IStreamSwitches>}, thunkAPI) =>{
        try {
            const response = await axios.post("/api/system_streams_sync",{
                id: systemId,
                body: checkedStreams
            })
            console.log("thunk")
            return response.data;
        }catch (e) {
            let errorMessage = "Failed to do something exceptional";
            if (e instanceof Error) {
                errorMessage = e.message;
            }
            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)
