import { createTheme } from "@material-ui/core";

const acrBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGray = "#868686";
export default createTheme({
    palette: {
        common: {
            blue: `${acrBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${acrBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: `${acrBlue}`,
            lineHeight: 1.5

        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: `${acrBlue}`,
            fontWeight: 500
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: `${acrBlue}`,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: `${arcGray}`
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
        body1: {
            fontSize: "1.25rem",
            color: arcGray,
            fontWeight: 300
        },
        learnButton: {
            borderColor: `${acrBlue}`,
            color: `${acrBlue}`,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        }
    }
})