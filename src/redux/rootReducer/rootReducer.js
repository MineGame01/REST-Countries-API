import { createSlice } from "@reduxjs/toolkit";
import { 
    getAllCountriesThunk, 
} from "../countriesListReducer/countriesListThunk";
import { getInfoCountryThunk } from "../infoCountryReducer/infoCountryThunk";

const rootReducer = createSlice({
    name: "root",
    initialState: {
        titleSite: "Where in the world?",
        error: [],
    },
    reducers: {
        clearGlobalError(state) {
            state.error = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCountriesThunk.rejected, (state, action) => {
                state.error.push(action.error.message);
            })
            .addCase(getInfoCountryThunk.rejected, (state, action) => {
                const errorSet = new Set();
                errorSet.add(action.payload?.message || action.error.message);
                state.error = Array.from(errorSet);
            })
    }
});

export default rootReducer.reducer;
export const { clearGlobalError } = rootReducer.actions;