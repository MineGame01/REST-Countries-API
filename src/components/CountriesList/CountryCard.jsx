import React from "react";
import styled from "styled-components";
import { 
    styleThemeBackgroundElement, 
    styleThemeBoxShadowElement 
} from "../../style/style";
import { Title } from "../../style/components";
import { NavLink } from "react-router-dom";

const CountryBody = styled.div`
width: 100%;
margin: 0 auto;
border-radius: ${({ theme }) => theme.styleElement.borderRadius};
a { text-decoration: none }
${styleThemeBackgroundElement};
${styleThemeBoxShadowElement};
`

const WrapperInfo = styled.div`
padding: 20px;
`

const CountryImage = styled.img`
display: block;
height: 200px;
margin: 0 auto;
width: 100%;
border-radius: ${({ theme }) => theme.styleElement.borderRadius} 
    ${({ theme }) => theme.styleElement.borderRadius} 0 0;
@media(${({ theme }) => theme.media.medium}) {
    height: 140px;
}
`

const CountryName = styled(Title)`
display: block;
margin: 10px 0;
font-weight: 800;
`

const InfoList = styled.ul`
* { font-size: 0.9rem }
padding: 0;
list-style: none;
line-height: 25px;
`

const CountryCard = ({ name, capital, region, population, flags }) => {
    const infoList = [
        ["Population:", population],
        ["Region:", region],
        ["Capital:", capital.join(", ")],
    ];

    return <CountryBody>
        <NavLink to={`/info/${name.common.toLowerCase()}`}>
            <CountryImage src={flags.png} alt={name.common} loading="lazy" />
            <WrapperInfo>
                <CountryName>{name.common}</CountryName>
                <InfoList>
                    {infoList.map(([name, value]) => (
                        <li key={name}><Title><b>{name}</b> {value}</Title></li>
                    ))}
                </InfoList>
            </WrapperInfo>
        </NavLink>
    </CountryBody>  
}

export default CountryCard;