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
                state.error.push(action.payload?.message || action.error.message);
            })
    }
});

export default rootReducer.reducer;
export const { clearGlobalError } = rootReducer.actions;