import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISystems} from "../../models/Systems";
import {getSystems} from "./ActionCreators";
import {RootState} from "../store";

interface ISystemSlice{
    systems: ISystems[];
    isLoading: boolean;
    error: string;
}

const initialState: ISystemSlice = {
    systems: [],
    isLoading: false,
    error: ''
}

export const systemsSlice = createSlice({
    name: "systems",
    initialState: initialState,
    reducers: {},
    extraReducers: builder=>{
        builder
            .addCase(getSystems.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(getSystems.fulfilled,(state, action:PayloadAction<ISystems[]>)=>{
                state.isLoading = false;
                state.error = '';
                state.systems = action.payload;
            })
            .addCase(getSystems.rejected,(state,action)=>{
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export default systemsSlice.reducer;

const systems = (state: RootState) => state.systemsReducer.systems

export const filterSystems = createSelector(
    [
        systems,
        (state, searchQuery) => searchQuery
    ],
    (filterSystems, searchQuery) => filterSystems.filter(system => system.name.includes(searchQuery)||system.description.includes(searchQuery))
)
