import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../style/components";
import ButtonDefault from "../common/ButtonDefault/ButtonDefault";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoCountryThunk, getNameCountryByCodeThunk } from "../../redux/infoCountryReducer/infoCountryThunk";
import { clearArrayBorderCountry } from "../../redux/infoCountryReducer/infoCountryReducer";
import PreLoaderCenter from "../common/PreLoaderCenter/PreLoaderCenter";
import InfoForCountry from "./InfoForCountry";

const InfoCountryBody = styled.div`
margin: 20px 0 0 0;
`

const Wrapper = styled.div` 
margin: 20px 0 0 0;
@media(${({ theme }) => theme.media.large}) {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 400px;
}
`

const ImageFlag = styled.div`
width: 100%;
height: auto;
img { width: 100% }
@media(${({ theme }) => theme.media.large}) {
    img { height: 100% }
}
@media(${({ theme }) => theme.media.medium}) {
    text-align: center;
    img { width: 100% }
}
`

const InfoCountry = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const arrayBorderCountry = useSelector(state => state.infoCountry.arrayBorderCountry);
    const isLoading = useSelector(state => state.infoCountry.isLoading);
    const borderIsLoading = useSelector(state => state.infoCountry.borderIsLoading);
    const infoCountryData = useSelector(state => state.infoCountry.infoCountryData);
    const { 
        flags, 
        name, 
        population, 
        region, 
        subregion, 
        capital, 
        tld, 
        currencies, 
        languages,
        borders = [],
    } = infoCountryData || {};

    useEffect(() => {
        dispatch(getInfoCountryThunk(params.countryName));
    }, [params, dispatch]);

    useEffect(() => {
        dispatch(clearArrayBorderCountry());
        for (let border of borders) {
            dispatch(getNameCountryByCodeThunk(border));
        }
    }, [dispatch, borders]);

    if (isLoading) return <PreLoaderCenter />
    return <InfoCountryBody>
        <Container>
            <ButtonDefault StartIcon={FaLongArrowAltLeft} onClick={() => navigate(-1)}>
                Back
            </ButtonDefault>
            <Wrapper>
                <ImageFlag>
                    <img src={ flags?.svg } alt="flag" />
                </ImageFlag>
                <InfoForCountry 
                    name={name}
                    population={population}
                    region={region}
                    subregion={subregion}
                    capital={capital}
                    tld={tld}
                    currencies={currencies}
                    languages={languages}
                    arrayBorderCountry={arrayBorderCountry}
                    borderIsLoading={borderIsLoading}
                />
            </Wrapper>
        </Container>
    </InfoCountryBody>
}

export default InfoCountry;