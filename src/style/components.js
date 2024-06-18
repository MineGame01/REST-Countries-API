import styled from "styled-components";

export const Container = styled.div`
max-width: 1300px;
margin: 0 auto;
padding: 0 2rem;
@media(${({ theme }) => theme.media.small}) {
    max-width: 100%;
    padding: 0 1rem;
}
@media(${({ theme }) => theme.media.medium}) {
    max-width: 700px;
}
@media(${({ theme }) => theme.media.large}) {
    max-width: 920px;
}
@media(${({ theme }) => theme.media.extraLarge}) {
    max-width: 1300px;
}
`

export const Title = styled.span`
font-size: ${({ theme }) => theme.typography.fontSize.default};
color: ${({ theme }) => theme.mode === "light" ? 
    theme.colors.text.light : 
    theme.colors.text.dark};
`

export const ErrorMessage = styled.div`
color: red;
`