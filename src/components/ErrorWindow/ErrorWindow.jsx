import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../style/components";
import { 
    styleThemeBackgroundError, 
    styleThemeBorderColorError, 
    styleThemeTextError 
} from "../../style/style";
import { MdErrorOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearGlobalError } from "../../redux/rootReducer/rootReducer";

const ErrorWindowBody = styled.div`
margin: 20px 0 20px 0;
border-width: 1px;
border-style: solid;
border-radius: ${({ theme }) => theme.styleElement.borderRadius};
${styleThemeBackgroundError};
${styleThemeBorderColorError};
`

const Wrapper = styled.div`
display: flex;
align-items: center;
padding: 10px;
svg {
    width: 20px;
    height: 20px;
    margin: 0 8px;
}
${styleThemeTextError};
`

const ErrorWindow = () => {
    const dispatch = useDispatch();

    const globalError = useSelector(state => state.root.error);

    useEffect(() => {
        if (globalError.length !== 0) {
            let keyTimeout = setTimeout(() => {
                dispatch(clearGlobalError());
                clearTimeout(keyTimeout);
            }, 5000);
        }
    }, [globalError, dispatch]);

    if (globalError.length === 0) return null;
    return <Container>
        <ErrorWindowBody>
            <Wrapper>
                <MdErrorOutline />
                {globalError.map(error => <div>{error} </div>)}
            </Wrapper>
        </ErrorWindowBody>
    </Container>
}

export default ErrorWindow;