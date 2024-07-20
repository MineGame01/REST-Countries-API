import React from "react";
import styled from "styled-components";
import { Title } from "../../../style/components";
import { 
    styleThemeBackgroundElement,
    styleThemeBoxShadowElement, 
    styleThemeText
} from "../../../style/style";

const ButtonDefaultBody = styled.button`
border: none;
border-radius: ${({ theme }) => theme.styleElement.borderRadius};
cursor: pointer;
${styleThemeBackgroundElement};
${styleThemeBoxShadowElement};
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 5px 20px;
svg,
img {
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
    ${styleThemeText}
}
`

const ButtonText = styled(Title)`

`

const ButtonDefault = ({ StartIcon, children, ...props }) => {
    return <ButtonDefaultBody {...props} >
        <Wrapper>
            {StartIcon && (typeof StartIcon === "function" ?
                <StartIcon /> : <img src={StartIcon} alt="startIcon" />)
            }
            <ButtonText>{children}</ButtonText>
        </Wrapper>
    </ButtonDefaultBody>    
}

export default ButtonDefault;