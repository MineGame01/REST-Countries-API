import { createAsyncThunk } from "@reduxjs/toolkit";
import { infoCountryAPI } from "../../api/infoCountryAPI";

export const getInfoCountryThunk = createAsyncThunk(
    "infoCountry/getInfoCountryThunk",
    async (nameCountry, { rejectWithValue }) => {
        try {
            const res = await infoCountryAPI.getInfoCountry(nameCountry);
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export const getNameCountryByCodeThunk = createAsyncThunk(
    "infoCountry/getNameCountryByCodeThunk",
    async (code) => {
        const res = await infoCountryAPI.getNameCountryByCode(code);
        return res.data;
    }
)