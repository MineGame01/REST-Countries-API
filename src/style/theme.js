export const theme = {
    mode: "light",
    colors: {
        body: {
            light: "hsl(0, 0%, 98%)",
            dark: "hsl(207, 26%, 17%)",
        },
        elements: {
            light: "hsl(0, 0%, 100%)",
            dark: "hsl(209, 23%, 22%)",
        },
        text: {
            light: "hsl(200, 15%, 8%)",
            dark: "hsl(0, 0%, 100%)",
        },
        error: {
            light: {
                text: "#DC3545",
                background: "#F8D7DA",
                borderColor: "#CE2029",
            },
            dark: {
                text: "#FF6384",
                background: "#7B0000",
                borderColor: "#990000",  
            },
        }
    },
    styleElement: {
        borderRadius: "4px",
        boxShadow: {
            header: {
                light: "0 5px 5px 2px rgb(224 224 224 / 40%)",
                dark: "0 5px 5px 2px rgb(25 25 25 / 0%)",
            },
            elements: {
                light: "0 0 5px 2px rgb(224 224 224 / 40%)",
                dark: "0 0 5px 2px rgb(25 25 25 / 0%)",
            },
        },
        height: {
            input: "55px",
        }
    },
    typography: {
        fontSize: {
            default: "1rem",
            input: "0.8rem",
        }
    },
    media: {
        extraLarge: "(min-width: 1140px)",
        large: "(min-width: 960px)",
        medium: "(min-width: 768px)",
        small: "(max-width: 540px)",
    },
}