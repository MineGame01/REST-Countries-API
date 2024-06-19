import React, { useState } from "react";
import { Container } from "../../style/components";
import InputField from "../common/Form/Input/InputField";
import SelectField from "../common/Form/Select/SelectField";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getAllCountriesThunk, sortByRegionThunk } from "../../redux/countriesListReducer/countriesListThunk";
import { filterArrayCountries } from "../../redux/countriesListReducer/countriesListReducer";

const SearchBody = styled.div`
margin: 20px 0 0 0;
`

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 0 0 20px 0;
form:nth-child(1) { flex-basis: 50% }
@media(${({ theme }) => theme.media.small}) {
    form:nth-child(1) { flex-basis: 100% }
    div:nth-child(2) {
        margin-top: 20px;
        flex-basis: 100%;
    }
}
`

const Search = () => {
    const dispatch = useDispatch();

    const [region, setRegion] = useState("");
    const [search, setsearch] = useState("");

    const searchCountry = async event => {
        event.preventDefault();
        const filterDispatch = filterArrayCountries(event.target["1"].value);

        if (region === "") dispatch(getAllCountriesThunk()).then(() => dispatch(filterDispatch))
        else dispatch(sortByRegionThunk(region)).then(() => dispatch(filterDispatch))
    }

    const sortByRegion = value => {
        if (value !== "") dispatch(sortByRegionThunk(value))
        else dispatch(getAllCountriesThunk())
        setRegion(value);
    }

    const regionArray = [
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania",
    ]

    return <SearchBody>
        <Container>
            <Wrapper>
                <form action="#" onSubmit={searchCountry}>
                    <InputField 
                        isSearch={true}
                        onChange={event => setsearch(event.target.value)}
                        value={search}
                        placeholder="Search for a country..."
                    />
                </form>
                <SelectField 
                    defaultValue="Filter by Region"
                    onSubmit={sortByRegion}
                    optionArray={regionArray}
                />
            </Wrapper>
        </Container>
    </SearchBody>
}

export default Search;