import { createSlice } from "@reduxjs/toolkit";
import { getAllCountriesThunk, sortByRegionThunk } from "./countriesListThunk";

const countriesListReducer = createSlice({
    name: "countriesList",
    initialState: {
        arrayCountries: null,
        isLoading: false,
    },
    reducers: {
        filterArrayCountries(state, action) {
            state.arrayCountries = state.arrayCountries
                .filter(country => country.name.common.toLowerCase().includes(action.payload.toLowerCase()));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCountriesThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCountriesThunk.fulfilled, (state, action) => {
                state.arrayCountries = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllCountriesThunk.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(sortByRegionThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sortByRegionThunk.fulfilled, (state, action) => {
                state.arrayCountries = action.payload;
                state.isLoading = false;
            })
            .addCase(sortByRegionThunk.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export default countriesListReducer.reducer;
export const { 
    filterArrayCountries,
} = countriesListReducer.actions;