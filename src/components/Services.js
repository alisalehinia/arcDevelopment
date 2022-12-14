import { Button, Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
import costumSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from "../assets/websiteIcon.svg";
const useStyles = makeStyles(theme => ({
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    }, learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
}))

export default function Services({ setValue, setSelectedIndex }) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return <Grid container direction="column">
        <grid item style={{ marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em" }}>
            <Typography gutterBottom align={matchesSM ? "center" : undefined} variant="h2">
                Services
            </Typography>
        </grid>
        <Grid item> {/*-----Android/ios Block-----*/}
            <Grid container style={{ marginTop: matchesSM ? "1em" : "5em" }} direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                    <Typography variant="h4">
                        Android/ios Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Extend Functionality. Extend Access. Increase Engagement.
                    </Typography>
                    <Typography variant="subtitle1">
                        Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform.
                    </Typography>
                    <Button onClick={() => { setValue(1); setSelectedIndex(2) }} variant="outlined" component={Link} to="/mobileapps" className={classes.learnButton}>
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                    <img alt="mobile phone icon" width="250em" src={mobileAppsIcon} className={classes.icon} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item> {/*-----Custom Software Block-----*/}
            <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
                    <Typography variant="h4">
                        Custom Software Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Save Energy. Save Time. Save Money.
                    </Typography>
                    <Typography variant="subtitle1">
                        Complete digital solutions, from investigation to {" "}<span className={classes.specialText}>celebration</span>
                    </Typography>
                    <Button component={Link} onClick={() => { setValue(1); setSelectedIndex(1) }} to="/costumsoftware" variant="outlined" className={classes.learnButton}>
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item>
                    <img alt="custom software icon" src={costumSoftwareIcon} className={classes.icon} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item> {/*-----Websites Block-----*/}
            <Grid container direction="row" style={{ marginBottom: "10em" }} className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }}>
                    <Typography variant="h4">
                        Website Development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                        Reach More. Discover More. Sell More.
                    </Typography>
                    <Typography variant="subtitle1">
                        Optimized for Search Engines, built for speed.
                    </Typography>
                    <Button onClick={() => { setValue(1); setSelectedIndex(3) }} component={Link} to="/websites" variant="outlined" className={classes.learnButton}>
                        <span style={{ marginRight: 10 }}>Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
                <Grid item style={{ marginRight: matchesSM ? 0 : "5em", }}>
                    <img alt="website icon" src={websiteIcon} width="250em" className={classes.icon} />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}