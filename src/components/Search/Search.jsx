import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Container } from "../../style/components";
import InputField from "../common/Form/Input/InputField";
import SelectField from "../common/Form/Select/SelectField";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getAllCountriesThunk, sortByRegionThunk } from "../../redux/countriesListReducer/countriesListThunk";
import { filterArrayCountries } from "../../redux/countriesListReducer/countriesListReducer";

const InputForm = ({ getValue, ...props }) => {
    return <Formik
        initialValues={{
            "search": ""
        }}
        onSubmit={values => getValue(values["search"])}
    >
        <Form>
            <InputField name="search" isSearch={true} {...props} />
        </Form>
    </Formik>
}

const SelectForm = ({ getValue, ...props }) => {
    return <Formik
        initialValues={{
            "sortRegion": ""
        }}
        onSubmit={values => getValue(values["sortRegion"])}
        
    >
        {({ handleSubmit }) => (
            <Form onChange={handleSubmit}>
                <SelectField name="sortRegion" {...props} />
            </Form>
        )}
    </Formik>
}

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
    form:nth-child(2) {
        margin-top: 20px;
        flex-basis: 100%;
    }
}
`

const Search = () => {
    const dispatch = useDispatch();

    const [region, setRegion] = useState("");

    const searchCountry = async searchValue => {
        const filterDispatch = filterArrayCountries(searchValue);

        if (region === "") dispatch(getAllCountriesThunk()).then(() => dispatch(filterDispatch))
        else dispatch(sortByRegionThunk(region)).then(() => dispatch(filterDispatch))
    }

    const sortByRegion = regionValue => {
        if (regionValue !== "") dispatch(sortByRegionThunk(regionValue))
        else dispatch(getAllCountriesThunk())
        setRegion(regionValue);
    }

    return <SearchBody>
        <Container>
            <Wrapper>
                <InputForm getValue={searchCountry} />
                <SelectForm getValue={sortByRegion} />
            </Wrapper>
        </Container>
    </SearchBody>
}

export default Search;