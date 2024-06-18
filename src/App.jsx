import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Header from "./components/Header/Header";
import ErrorWindow from "./components/ErrorWindow/ErrorWindow";
import { Outlet } from "react-router-dom";

const AppStyle = styled.div`
width: 100%;
min-height: 100vh;
background: ${({ theme }) => theme.mode === "light" ? 
    theme.colors.body.light : 
    theme.colors.body.dark};
`

const App = () => {
    const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "light");
    const [themeDefault, setThemeDefault] = useState(theme);

    const changeThemeMode = () => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
        localStorage.setItem("theme", themeMode === "light" ? "dark" : "light");
    }

    useEffect(() => {
        setThemeDefault({
            ...themeDefault,
            mode: themeDefault.mode = themeMode,
        })
    }, [themeMode]);

    return <ThemeProvider theme={themeDefault}>
        <AppStyle>
            <Header changeThemeMode={changeThemeMode}/>
            <ErrorWindow />
            <Outlet />
        </AppStyle>
    </ThemeProvider>
}

export default App;