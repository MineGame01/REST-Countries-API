import React from "react";
import { Container, Title } from "../../style/components";
import styled from "styled-components";
import ButtonTheme from "./../common/ButtonTheme/ButtonTheme";
import { styleThemeBackgroundElement } from "../../style/style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderBody = styled.div`
box-shadow: ${({ theme }) => theme.mode === "light" ?
    theme.styleElement.boxShadow.header.light :
    theme.styleElement.boxShadow.header.dark};
${styleThemeBackgroundElement};
`

const TitleSite = styled.div`
flex-grow: 1;
font-weight: 900;
text-wrap: nowrap;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
padding: 15px 0;
a { text-decoration: none }
@media(${({ theme }) => theme.media.small}) { * { font-size: 0.8rem } }
`

const Header = ({ changeThemeMode }) => {
    const titleSite = useSelector(state => state.root.titleSite);

    return <HeaderBody>
        <Container>
            <Wrapper>
                <TitleSite>
                    <Link to="/">
                        <Title>{titleSite}</Title>
                    </Link>
                </TitleSite>
                <ButtonTheme onClick={() => changeThemeMode()} />
            </Wrapper>
        </Container>
    </HeaderBody>
}

export default Header;