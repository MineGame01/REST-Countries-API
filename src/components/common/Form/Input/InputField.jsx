import React from "react";
import { useField } from "formik";
import { FaSearch } from "react-icons/fa";
import styled, { css } from "styled-components";
import { 
    styleThemeBorderColorError,
    styleThemeBackgroundElement, 
    styleThemeBoxShadowElement, 
    styleThemeText 
} from "../../../../style/style";
import { ErrorMessage } from "../../../../style/components";

const inputSearch = css`
input {
    padding-left: 70px;
}
button {
    display: block;
}
`

const InputStyle = styled.div`
position: relative;
width: 100%;
height: ${({ theme }) => theme.styleElement.height.input};
${styleThemeBoxShadowElement};
input {
    width: 100%;
    height: 100%;
    padding: 20px;
    font-size: ${({ theme }) => theme.typography.fontSize.input};
    border: none;
    border-radius: ${({ theme }) => theme.styleElement.borderRadius};
    box-sizing: border-box;
    ${styleThemeText};
    ${styleThemeBackgroundElement};
    ${props => props.$error && css`
        border-width: 1px;
        border-style: solid;
        ${styleThemeBorderColorError};
    `};
}
button {
    position: absolute;
    left: 0;
    width: 60px;
    height: 100%;
    z-index: 2;
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    
    svg {
        color: ${({ theme }) => theme.mode === "light" ? "black" : "white"};
        width: 15px;
        height: 15px;
        opacity: 50%;
    }
}
${props => props.$search && inputSearch};
`

const InputField = ({ isSearch, ...props }) => {
    const [field, meta] = useField(props);

    return <>
        <InputStyle $search={isSearch} $error={meta.touched && meta.error} {...props}>
            <button type="submit">
                <FaSearch/>
            </button>
            <input autoComplete="off" {...field} {...props} />
        </InputStyle>
        <ErrorMessage>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </ErrorMessage>
    </>
}

export default InputField;