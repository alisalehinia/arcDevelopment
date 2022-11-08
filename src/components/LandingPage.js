
import { Button, Card, CardContent, Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core"
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data"
import ButtonArrow from "./ui/ButtonArrow";
import costumSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg"
import CallToAction from "./ui/CallToAction";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "45em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("md")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
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
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },

}))

export default function LandingPage({ setValue, setSelectedIndex }) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const defaultOptions = {
        loop: true,
        autoPlay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> {/*-----Hero Block-----*/}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid item sm className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2">
                            Bringing West Cost Technology<br />to the Midwest
                        </Typography>
                        <Grid container className={classes.buttonContainer} justify="center">
                            <Grid item>
                                <Button onClick={() => setValue(5)} component={Link} to="/estimate" className={classes.estimateButton} variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => setValue(2)} className={classes.learnButtonHero} component={Link} to="/revolution" variant="outlined"><span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation}>
                        <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
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
            <Grid item> {/*-----Android/ios Block-----*/}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
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
                        <img alt="mobile phone icon" src={mobileAppsIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Websites Block-----*/}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }}>
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
                    <Grid item>
                        <img alt="website icon" src={websiteIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Revolution Block -----*/}
                <Grid container alignItems="center" justify="center" style={{ height: "100em", marginTop: "12em" }}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button onClick={() => setValue(2)} component={Link} to="/revolution" className={classes.learnButtonHero} variant="outlined"><span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>
            <Grid item> {/*-----Information Block*/}
                <Grid container style={{ height: "80em" }} className={classes.infoBackground} direction="row" alignItems="center">
                    <Grid item container style={{ textAlign: matchesXS ? "center" : "inhrit" }} direction={matchesXS ? "column" : "row"}>
                        <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}>
                            <Grid container style={{ marginBottom: matchesXS ? "10em" : 0 }} direction="column">
                                <Typography variant="h2" style={{ color: "white" }}>
                                    About Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Let's get personal.
                                </Typography>
                                <Grid item>
                                    <Button onClick={() => setValue(3)} component={Link} to="/about" variant="outlined" style={{ color: "white", borderColor: "white" }} className={classes.learnButton}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right" }}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{ color: "white" }}>
                                    Contact Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Say Hello!
                                </Typography>
                                <Grid item>
                                    <Button onClick={() => setValue(4)} component={Link} to="/contact" variant="outlined" style={{ color: "white", borderColor: "white" }} className={classes.learnButton}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*-----Call To Action Block-----*/}
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>


    )
}
