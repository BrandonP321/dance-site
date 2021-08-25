import { configureStore } from "@reduxjs/toolkit";
import responsiveReducer from "../features/slices/responsiveSlice";

export const store = configureStore({
    reducer: {
        responsive: responsiveReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;