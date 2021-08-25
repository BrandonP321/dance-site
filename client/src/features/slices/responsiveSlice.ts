import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ResponsiveState {
    massive: boolean;
    extraLarge: boolean;
    large: boolean;
    medium: boolean;
    mobile: boolean;
    tiny: boolean;
}

const initialState: ResponsiveState = {
    massive: false,
    extraLarge: false,
    large: false,
    medium: false,
    mobile: false,
    tiny: false
}

const responsiveSlice = createSlice({
    name: "responsiveSize",
    initialState,
    reducers: {
        screenResized(state, action: PayloadAction<ResponsiveState>) {
            // not sure why I can't update the state as a whole, so this will do for now
            state.massive = action.payload.massive;
            state.extraLarge = action.payload.extraLarge;
            state.large = action.payload.large;
            state.medium = action.payload.medium;
            state.mobile = action.payload.mobile;
            state.tiny = action.payload.tiny;
        }
    }
})

export const {screenResized} = responsiveSlice.actions;
export default responsiveSlice.reducer;