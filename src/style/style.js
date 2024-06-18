import { css } from "styled-components";

export const styleThemeBackgroundElement = css`
background: ${({ theme }) => theme.mode === "light" ? 
    theme.colors.elements.light : 
    theme.colors.elements.dark};
`

export const styleThemeText = css`
color: ${({ theme }) => theme.mode === "light" ? 
    theme.colors.text.light : 
    theme.colors.text.dark};
`

export const styleThemeBoxShadowElement = css`
box-shadow: ${({ theme }) => theme.mode === "light" ? 
    theme.styleElement.boxShadow.elements.light : 
    theme.styleElement.boxShadow.elements.dark};
`

export const styleThemeTextError = css`
color: ${({ theme }) => theme.mode === "light" ? 
    theme.colors.error.light.text : 
    theme.colors.error.dark.text};
`

export const styleThemeBackgroundError = css`
background: ${({ theme }) => theme.mode === "light" ? 
    theme.colors.error.light.background : 
    theme.colors.error.dark.background}
`

export const styleThemeBorderColorError = css`
border-color: ${({ theme }) => theme.mode === "light" ? 
    theme.colors.error.light.borderColor : 
    theme.colors.error.dark.borderColor}
`   