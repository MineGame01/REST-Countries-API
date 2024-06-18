import { defaultSettingAPI } from "./defaultSettingAPI";

const fields = [
    "name",
    "population",
    "region",
    "subregion",
    "capital",
    "tld",
    "currencies",
    "languages",
    "borders",
    "flags,"
]

export const infoCountryAPI = {
    getInfoCountry(nameCountry) {
        return defaultSettingAPI.get(`/name/${nameCountry}?fullText=true&fields=${fields.join(",")}`).then(res => res);
    },
    getNameCountryByCode(code) {
        return defaultSettingAPI.get(`/alpha/${code}?fields=name`).then(res => res);
    }
}