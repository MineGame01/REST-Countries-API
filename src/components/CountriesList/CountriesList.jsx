import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../style/components";
import CountryCard from "./CountryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountriesThunk } from "../../redux/countriesListReducer/countriesListThunk";
import PreLoaderCenter from "../common/PreLoaderCenter/PreLoaderCenter";
import ButtonDefault from "../common/ButtonDefault/ButtonDefault";

const CountriesListBody = styled.div``

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 40px;
`

const ButtonMore = styled(ButtonDefault)`
width: 100%;
padding: 20px 20px;
margin: 20px 0 0 0;
`

const CountriesList = () => {
    const dispatch = useDispatch();

    const arrayCountries = useSelector(state => state.countriesList.arrayCountries);
    const isLoading = useSelector(state => state.countriesList.isLoading);

    const [portionCountries, setPortionCountries] = useState(20);

    useEffect(() => {
        if (arrayCountries === null) dispatch(getAllCountriesThunk());
    }, [dispatch, arrayCountries]);

    useEffect(() => {
        setPortionCountries(20);
    }, [arrayCountries]);

    if (isLoading) return <PreLoaderCenter />
    return <CountriesListBody>
        <Container>
            <Wrapper>
                {arrayCountries?.filter((el, index) => index + 1 <= portionCountries).map(({ name, capital, region, population, flags }, index) => (
                    <CountryCard 
                        key={index}
                        name={name}
                        capital={capital}
                        region={region}
                        population={population}
                        flags={flags}
                    />
                ))}
            </Wrapper>
            <ButtonMore 
            onClick={() => setPortionCountries(portion => portion + 20)}>
                More
            </ButtonMore>
        </Container>
    </CountriesListBody>
}

export default CountriesList;