import axios from "axios";

export const defaultSettingAPI = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});