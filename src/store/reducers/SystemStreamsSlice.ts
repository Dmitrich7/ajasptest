import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {postSystemStreams} from "./ActionCreators";
import {CheckedStreams, IStreamSwitches} from "../../models/Systems";
import React from "react";

interface ISystemStreamsSlice{
    checkedStreams: Record<string, undefined|IStreamSwitches>;
    isLoading: boolean;
    error: string;
}

const initialState: ISystemStreamsSlice = {
    checkedStreams: CheckedStreams,
    isLoading: false,
    error: ''
}

export const systemStreamsSlice = createSlice({
    name: "systemStreams",
    initialState: initialState,
    reducers: {
        checkAll(state){
            state.checkedStreams = Object.fromEntries(Object.keys(CheckedStreams).map(key => [key,{load_delta: false, sync_future_assignments: false}]))
        },
        uncheckAll(state){
            state.checkedStreams = Object.fromEntries(Object.keys(CheckedStreams).map(key => [key,undefined]))
        },
        addSwitch(state,action: PayloadAction<React.ChangeEvent<HTMLInputElement>>){
            state.checkedStreams = {
                ...state.checkedStreams,
                [action.payload.target.value]: {load_delta: false, sync_future_assignments: false}
            }
        },
        removeSwitch(state,action: PayloadAction<React.ChangeEvent<HTMLInputElement>>){
            state.checkedStreams = {
                ...state.checkedStreams,
                [action.payload.target.value]: undefined
            }
        },
        setStreamSwitch(state,action:PayloadAction<React.ChangeEvent<HTMLInputElement>>){
            switch (action.payload.target.parentElement?.parentElement?.parentElement?.parentElement?.ariaLabel) {
                case 'sync_future_assignments':
                    state.checkedStreams = {
                        ...state.checkedStreams,
                        [action.payload.target.value]: {
                            load_delta: state.checkedStreams[action.payload.target.value]!.load_delta,
                            sync_future_assignments: !state.checkedStreams[action.payload.target.value]!.sync_future_assignments
                        }
                    }
                    break
                case 'load_delta':
                    state.checkedStreams = {
                        ...state.checkedStreams,
                        [action.payload.target.value]: {
                            load_delta: !state.checkedStreams[action.payload.target.value]!.load_delta,
                            sync_future_assignments: state.checkedStreams[action.payload.target.value]!.sync_future_assignments
                        }
                    }
                    break
            }
        }
    },
    extraReducers: builder=>{
        builder
            .addCase(postSystemStreams.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(postSystemStreams.fulfilled,(state)=>{
                state.isLoading = false;
                state.error = '';
            })
            .addCase(postSystemStreams.rejected,(state,action)=>{
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export default systemStreamsSlice.reducer;

