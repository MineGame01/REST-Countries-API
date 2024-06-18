import { defaultSettingAPI } from "./defaultSettingAPI";

const fields = [
    "name",
    "population",
    "region",
    "capital",
    "flags",
]

export const countriesListAPI = {
    getAllCountries() {
        return defaultSettingAPI.get(`/all?fields=${fields.join(",")}`).then(res => res);
    },
    sortByRegion(region) {
        return defaultSettingAPI.get(`/region/${region.toLowerCase()}?fields=${fields.join(",")}`).then(res => res);
    }
}