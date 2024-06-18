import { createAsyncThunk } from "@reduxjs/toolkit";
import { countriesListAPI } from "../../api/countriesListAPI";

export const getAllCountriesThunk = createAsyncThunk(
    "countriesList/getAllCountriesThunk",
    async () => {
        const res = await countriesListAPI.getAllCountries();
        return res.data;
    }
)

export const sortByRegionThunk = createAsyncThunk(
    "countriesList/sortByRegionThunk",
    async (region) => {
        const res = await countriesListAPI.sortByRegion(region);
        return res.data;
    }
)