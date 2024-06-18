import { createSlice } from "@reduxjs/toolkit";
import { getInfoCountryThunk, getNameCountryByCodeThunk } from "./infoCountryThunk";

const infoCountryReducer = createSlice({
    name: "infoCountry",
    initialState: {
        infoCountryData: null,
        arrayBorderCountry: null,
        isLoading: false,
        borderIsLoading: false,
    },
    reducers: {
        clearArrayBorderCountry(state) {
            state.arrayBorderCountry = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getInfoCountryThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getInfoCountryThunk.fulfilled, (state, action) => {
                state.infoCountryData = {...action.payload[0]};
                state.isLoading = false;
            })
            .addCase(getInfoCountryThunk.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(getNameCountryByCodeThunk.pending, (state) => {
                state.borderIsLoading = true;
            })
            .addCase(getNameCountryByCodeThunk.fulfilled, (state, action) => {
                const borders = new Set(state.arrayBorderCountry);
                borders.add(action.payload.name.common);
                state.arrayBorderCountry = Array.from(borders);
                state.borderIsLoading = false;
            })
            .addCase(getNameCountryByCodeThunk.rejected, (state) => {
                state.borderIsLoading = false;
            })
    }
});

export default infoCountryReducer.reducer;
export const { clearArrayBorderCountry } = infoCountryReducer.actions;