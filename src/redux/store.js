import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer/rootReducer";
import countriesListReducer from "./countriesListReducer/countriesListReducer";
import infoCountryReducer from "./infoCountryReducer/infoCountryReducer";

const reducer = combineReducers({
    root: rootReducer,
    countriesList: countriesListReducer,
    infoCountry: infoCountryReducer,
})

export const store = configureStore({
    reducer,
});