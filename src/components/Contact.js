import { Button, CircularProgress, Dialog, DialogContent, Grid, makeStyles, Snackbar, TextField, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import background from "../assets/background.jpg"
import mobileBackground from "../assets/mobileBackground.jpg"
import phoneIcon from "../assets/phone.svg"
import emailIcon from "../assets/email.svg"
import airplane from "../assets/send.svg"
import ButtonArrow from "./ui/ButtonArrow"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "1em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
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
        [theme.breakpoints.down("md")]: {
            marginRight: 0,
            marginLeft: 0
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5,
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225
        }
    }
}))

export default function Contact({ setValue, setSelectedIndex }) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");

    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });

    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case "email":
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (!valid) {
                    setEmailHelper("Invalid Email")
                } else {
                    setEmailHelper("")
                }
                break;
            case "phone":
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if (!valid) {
                    setPhoneHelper("Invalid phone")
                } else {
                    setPhoneHelper("")
                }
                break;
            default:
                break;
        }
    }
    const onConfirm = () => {
        setLoading(true);
        axios.get("url",
            {
                params: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                }
            }).then(res => {
                setLoading(false);
                setOpen(false);
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
                setAlert({ open: true, message: "Message sent successfully", backgroundColor: "#4bb543" })
            }).catch(err => {
                setLoading(false);
                setAlert({ open: true, message: "Something went wrong, please try again!", backgroundColor: "#ff3232" })
            })
    }
    return (
        <Grid container direction="row">
            <Grid item container direction="column" justify="center" alignItems="center" lg={4} xl={3}
                style={{ marginBottom: matchesSM ? "1em" : matchesMD ? "5em" : 0, marginTop: matchesMD ? "5em" : 0 }}
            >
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h2" style={{ lineHeight: 1 }}>
                                Contact Us
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" style={{ color: theme.palette.common.blue }}>
                                we're waiting.
                            </Typography>
                        </Grid>
                        <Grid item container style={{ marginTop: "2em" }}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href="tel:5555555555" style={{ textDecoration: "none", color: "inherit" }}>(555) 555 - 5555</a></Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ marginBottom: "2em" }}>
                            <Grid item>
                                <img src={emailIcon} alt="envelop" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>
                                    <a href="mailto:alisalehinia79@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>alisalehinia79@gmail.com</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{ maxWidth: "20em" }}>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid style={{ marginBottom: "0.5em" }} item>
                                <TextField fullWidth
                                    label="Email"
                                    id="email"
                                    helperText={emailHelper}
                                    error={emailHelper.length !== 0}
                                    value={email}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid style={{ marginBottom: "0.5em" }} item>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    error={phoneHelper.length !== 0}
                                    helperText={phoneHelper}
                                    id="phone"
                                    value={phone}
                                    onChange={onChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: "20em" }}>
                            <TextField
                                multiline
                                fullWidth
                                className={classes.message}
                                rows={10}
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>
                        <Grid item container justify="center" style={{ marginTop: "2em" }}>
                            <Button
                                disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
                                variant="contained"
                                className={classes.sendButton}>
                                Send Message
                                <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} onClick={() => {
                                    setOpen(true)
                                }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog fullScreen={matchesXS} style={{ zIndex: 1302 }} open={open} onClose={() => setOpen(false)} PaperProps={{
                style: {
                    paddingTop: matchesXS ? "1em" : "5em",
                    paddingBottom: matchesXS ? "1em" : "5em",
                    paddingRight: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em",
                    paddingLeft: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em"
                }
            }} >
                <DialogContent>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Confirm Message
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item style={{ marginBottom: "0.5em" }}>
                            <TextField
                                fullWidth
                                label="Name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid style={{ marginBottom: "0.5em" }} item>
                            <TextField fullWidth
                                label="Email"
                                id="email"
                                helperText={emailHelper}
                                error={emailHelper.length !== 0}
                                value={email}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid style={{ marginBottom: "0.5em" }} item>
                            <TextField
                                fullWidth
                                label="Phone"
                                error={phoneHelper.length !== 0}
                                helperText={phoneHelper}
                                id="phone"
                                value={phone}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item style={{ maxWidth: matchesSM ? "100%" : "20em" }}>
                            <TextField
                                multiline
                                fullWidth
                                className={classes.message}
                                rows={10}
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                InputProps={{ disableUnderline: true }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container direction={matchesSM ? "column" : "row"} style={{ marginTop: "2em" }} alignItems="center">
                        <Grid item>
                            <Button style={{ fontWeight: 300 }} color="primary" onClick={() => setOpen(false)}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button
                                disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
                                variant="contained"
                                className={classes.sendButton}>
                                {loading ? <CircularProgress size={30} /> : <React.Fragment>
                                    Send Message
                                    <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} onClick={onConfirm} />
                                </React.Fragment>}
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar open={alert.open} message={alert.message} ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={() => setAlert({ ...alert, open: false })}
                autoHideDuration={4000}
            />
            <Grid item container className={classes.background} alignItems="center" direction={matchesMD ? "column" : "row"} lg={8} xl={9}
                justify={matchesMD ? "center" : undefined}
            >
                <Grid item style={{ marginLeft: matchesMD ? 0 : "3em", textAlign: matchesSM ? "center" : "inherit" }}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                                Simple Software.<br /> Revolutionary results.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                                Take advantage of the 21st century.
                            </Typography>
                            <Grid container item justify={matchesMD ? "center" : undefined}>
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
        </Grid >
    )
}