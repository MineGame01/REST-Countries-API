import React from "react";
import styled from "styled-components";
import { Title } from "../../style/components";
import { styleThemeText } from "../../style/style";
import ButtonDefault from "../common/ButtonDefault/ButtonDefault";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
@media(${({ theme }) => theme.media.large}) { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 30px;
}
`

const TitleCountry = styled(Title)`
display: block;
margin: 20px 0;
font-weight: 800;
font-size: 1.1rem;
@media(${({ theme }) => theme.media.large}) { font-size: 2rem }
`

const InfoListCountry = styled.div`
ul {
    padding: 0;
    font-size: 0.8rem;
    list-style: none;
    li { line-height: 30px }
    ${styleThemeText};
}
@media(${({ theme }) => theme.media.large}) {
    display: flex;
    justify-content: space-between;
}
`

const ListInfoOne = styled.ul``

const ListInfoTwo = styled.ul`
margin: 20px 0 0 0;
@media(${({ theme }) => theme.media.large}) { margin: 0 } 
`

const BordersCountriesWrapper = styled.div`
margin: 20px 0 0 0;
display: flex;
align-items: center;
flex-flow: row wrap;
padding: 0;
list-style: none;
li { margin: 5px }
`

const BordersCountriesTitle = styled(Title)`
@media(${({ theme }) => theme.media.medium}) { flex-basis: auto }
@media(${({ theme }) => theme.media.small}) { flex-basis: 100% }
`

const InfoForCountry = ({ 
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borderIsLoading,
    arrayBorderCountry,

}) => {
    const navigate = useNavigate();

    const infoList = (list) => {

        const valuesToString = (obj, searchKey = false) => {
            let arrayObj = [];
            if (Array.isArray(obj)) return obj.join(", ");
            for (let key in obj) {
                arrayObj.push(obj[key]);
            }
            if (searchKey) return arrayObj.map(el => el[searchKey]).join(", ");
            else return arrayObj.join(", ");
        }

        switch (list) {
            case 1: return [
                ["Native Name:", valuesToString(name?.nativeName, "common")],
                ["Population:", population],
                ["Region:", region],
                ["Sub Region:", subregion],
                ["Capital:", valuesToString(capital)],
            ]
            case 2: return [
                ["Top Level Domain:", valuesToString(tld)],
                ["Currencies:", valuesToString(currencies, "name")],
                ["Languages:", valuesToString(languages)],
            ]
        } 
    }

    return <Body>
        <TitleCountry>{ name?.common }</TitleCountry>
        <InfoListCountry>
            <ListInfoOne>
                {infoList(1).map(([ name, value ], index) => (
                    <li key={ index }><b>{ name }</b> { value }</li>
                ))}
            </ListInfoOne>
            <ListInfoTwo>
                {infoList(2).map(([ name, value ], index) => (
                    <li key={ index }><b>{ name }</b> { value }</li>
                ))}
            </ListInfoTwo>
        </InfoListCountry>
        <BordersCountriesWrapper>
            <BordersCountriesTitle>Border Countries: </BordersCountriesTitle>
            {borderIsLoading && "Loading..."}
            {arrayBorderCountry?.map(name => (
                    <li key={name}>
                        <ButtonDefault
                            onClick={() => navigate(`/info/${ name.toLowerCase() }`)}
                        >{name}</ButtonDefault>
                    </li>
            )) || <Title style={{ margin: "0 0 0 10px"}}>Not Found!</Title>}
        </BordersCountriesWrapper>
    </Body>
}

export default InfoForCountry;