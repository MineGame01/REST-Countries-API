import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { 
    styleThemeBorderColorError, 
    styleThemeBackgroundElement, 
    styleThemeBoxShadowElement, 
    styleThemeText 
} from "../../../../style/style";
import { ErrorMessage } from "../../../../style/components";
import { AiFillCaretDown } from "react-icons/ai";

const Select = styled.div`
position: relative;
min-width: 160px;
padding: 0;
font-size: ${({ theme }) => theme.typography.fontSize.input};
border-radius: ${({ theme }) => theme.styleElement.borderRadius};
cursor: pointer;
${styleThemeText};
${props => props.$error && css`
    border-width: 1px;
    border-style: solid;
    ${styleThemeBorderColorError};
`};
@media(${({ theme }) => theme.media.small}) {
    width: 100%;
}
`

const Wrapper = styled.button`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: ${({ theme }) => theme.styleElement.height.input};
padding: 0 20px 0 20px;
color: inherit;
background: none;
border: none;
border-radius: inherit;
${styleThemeBackgroundElement};
${styleThemeBoxShadowElement};
`

const List = styled.div`
position: absolute;
display: ${( props ) => props.$isOpen ? "flex" : "none"};
flex-direction: column;
width: 100%;
margin: 5px 0 0 0;
padding: 10px;
text-wrap: nowrap;
border-radius: inherit;
box-sizing: border-box;
button {
    font-size: inherit;
    line-height: 20px;
    text-align: start;
    color: inherit;
    background: none;
    border: none;
    cursor: inherit;

}
${styleThemeBackgroundElement};
${styleThemeBoxShadowElement};
`

const SelectField = ({ defaultValue = "", optionArray, meta = {}, onSubmit }) => {
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        onSubmit(value);
    }, [value, onSubmit]);

    const handleChange = event => {
        setValue(event.target.dataset.value);
    }

    return <div>
        <Select $error={meta.touched && meta.error}>
            <Wrapper onClick={() => setIsOpen((value) => !value)}>
                <div>{value === "" ? defaultValue : value}</div>
                <AiFillCaretDown 
                    style={{ 
                        transform: isOpen ? "rotate(180deg)" : null, 
                        transition: "0.2s all ease"
                    }} 
                />
            </Wrapper>
            <List $isOpen={isOpen}>
                <button 
                    data-value={""}
                    onClick={handleChange}
                >{defaultValue}</button>
                {optionArray.map((key) => (
                    <button 
                        key={key} 
                        data-value={key} 
                        onClick={handleChange}
                    >{key}</button>
                ))}
            </List>
        </Select>
        <ErrorMessage>
            {meta.touched && meta.error && meta.error}
        </ErrorMessage>
    </div>
}

export default SelectField;