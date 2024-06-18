import React from "react";
import styled, { useTheme } from "styled-components";
import { Title } from "../../../style/components";
import { IoMdMoon } from "react-icons/io";

const ButtonThemeStyle = styled.button`
display: flex;
align-items: center;
text-wrap: nowrap;
background: none;
border: none;
cursor: pointer;
svg {
    margin: 0 7px 0 0;
}
`

const ButtonTheme = (props) => {
    const themeMode = useTheme().mode;

    return <ButtonThemeStyle {...props}>
        <IoMdMoon color={themeMode === "light" ? "black" : "white"}/>
        <Title>
            {themeMode === "light" ? "Dark" : "Light"} Mode
        </Title>
    </ButtonThemeStyle>
}
export default ButtonTheme;