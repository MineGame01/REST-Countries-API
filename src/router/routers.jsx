import React from "react";
import { 
    Route, 
    createHashRouter, 
    createRoutesFromElements 
} from "react-router-dom";
import App from "./../App";
import InfoCountry from "./../components/InfoCountry/InfoCountry";
import Search from "./../components/Search/Search";
import CountriesList from "./../components/CountriesList/CountriesList";

export const routers = createHashRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<App />} 
        >
            <Route 
                path="" 
                element={<>
                    <Search />
                    <CountriesList />
                </>} 
            />
            <Route path="info/:countryName" element={<InfoCountry />} />
        </Route>
    )
)