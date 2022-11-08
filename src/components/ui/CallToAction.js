import { Button, Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg"
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
            marginLeft: 0
        }
    }
}))

export default function CallToAction({ setValue }) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return <Grid container alignItems="center" className={classes.background} direction={matchesSM ? "column" : "row"} justify={matchesSM ? "center" : "space-between"}>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit" }}>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h2">
                        Simple Software.<br /> Revolutionary results.
                    </Typography>
                    <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                        Take advantage of the 21st century.
                    </Typography>
                    <Grid container item justify={matchesSM ? "center" : undefined}>
                        <Button component={Link} to="/revolution" onClick={() => setValue(2)} variant="outlined" className={classes.learnButton}>
                            <span style={{ marginRight: 5 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item >
            <Button component={Link} onClick={() => setValue(5)} to="/estimate" className={classes.estimateButton} variant="contained">
                Free Estimate
            </Button>
        </Grid>
    </Grid>
}