import React from "react";
import styled, { useTheme } from "styled-components";
import preloader_light from "../../assets/preloader-light.svg";
import preloader_dark from "../../assets/preloader-dark.svg";

export const PreLoaderCenterImg = styled.img`
position: relative;
left: 50%;
width: 200px;
height 200px;
transform: translate(-50%, 40%);
color: red;
` 

const PreLoaderCenter = () => {
    const theme = useTheme();

    return <PreLoaderCenterImg 
        src={theme.mode === "light" ? preloader_light : preloader_dark}
        alt="Loading..."
    />
}

export default PreLoaderCenter;