import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import systemsReducer from "./reducers/SystemsSlice"
import systemStreamsReducer from "./reducers/SystemStreamsSlice"
import systemLogsReducer from "./reducers/SystemlogsSlice"

const rootReducer = combineReducers({
    systemsReducer,
    systemStreamsReducer,
    systemLogsReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
