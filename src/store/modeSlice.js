import { createSlice } from "@reduxjs/toolkit";

// value is true for day...

const initialState = {
    mode: 'Day',
    value: true
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        darken: (state) => {
            state.value = false
            state.mode = "Night"
        },
        lighten: (state) => {
            state.value = true
            state.mode = "Day"
        }
    }
})

export const modeSliceActions = modeSlice.actions

export default modeSlice.reducer