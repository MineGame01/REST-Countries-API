import React from "react";
import { useField } from "formik";
import styled, { css } from "styled-components";
import { 
    styleThemeBorderColorError, 
    styleThemeBackgroundElement, 
    styleThemeBoxShadowElement, 
    styleThemeText 
} from "../../../../style/style";
import { ErrorMessage } from "../../../../style/components";

const SelectStyle = styled.div`
height: ${({ theme }) => theme.styleElement.height.input};
box-sizing: border-box;
${styleThemeBoxShadowElement};
select {
    width: 100%;
    height: 100%;
    padding: 20px 40px 20px 20px;
    font-size: ${({ theme }) => theme.typography.fontSize.input};
    border: none;
    border-radius: ${({ theme }) => theme.styleElement.borderRadius};
    ${styleThemeText};
    ${styleThemeBackgroundElement};
    ${props => props.$error && css`
        border-width: 1px;
        border-style: solid;
        ${styleThemeBorderColorError};
    `};
}
`

const Select = ({ ...props }) => {
    const [field, meta] = useField(props);

    return <>
        <SelectStyle $error={meta.touched && meta.error} {...props}>
            <select {...field} {...props}>
                <option value="">Default</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </SelectStyle>
        <ErrorMessage>
            {meta.touched && meta.error && meta.error}
        </ErrorMessage>
    </>
}

export default Select;