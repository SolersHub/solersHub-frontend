import React, { useState, useEffect, useRef } from 'react'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import { Fade } from "react-awesome-reveal";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Slide from "@material-ui/core/Slide";
import Button from "components/CustomButtons/Button.js";
import Hidden from "@material-ui/core/Hidden";
import Footer from "components/Footer/Footer.js";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import { useAuth } from "utils/hooks/useAuth"
import Router from "next/router";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

import style from "styles/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);
const useStyle = makeStyles(style);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

function index(props) {
    const classes = useStyles();
    const classe = useStyle();
    const { ...rest } = props;
    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [classicModal, setClassicModal] = React.useState(false);
    const [success, setSuccess] = useState(false)



    useEffect(() => {
        if (localStorage.getItem("user") == "" && localStorage.getItem("admin") !== true) {
            Router.push("/");

        }

    }, [])

    return (
        <div>
            <Header
                brand="NextJS Material Kit"
                rightLinks={<HeaderLinks />}
                fixed
                color="white"
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}
                {...rest}
            />
            <Dialog
                classes={{
                    root: classe.center,
                    paper: classe.modal,
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
                maxWidth={"md"}
            >
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classe.modalHeader}
                >
                    <IconButton
                        className={classe.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setClassicModal(false)}
                    >
                        <Close className={classe.modalClose} />
                    </IconButton>
                    <h4 className={classe.modalTitle}>Modal title</h4>
                </DialogTitle>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classe.modalBody}
                >
                    <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean. A small
                        river named Duden flows by their place and supplies it
                        with the necessary regelialia. It is a paradisematic
                        country, in which roasted parts of sentences fly into your
                        mouth. Even the all-powerful Pointing has no control about
                        the blind texts it is an almost unorthographic life One
                        day however a small line of blind text by the name of
                        Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                </DialogContent>
                <DialogActions className={classe.modalFooter}>
                    <Button color="transparent" simple>
                        Nice Button
                    </Button>
                    <Button
                        onClick={() => setClassicModal(false)}
                        color="danger"
                        simple
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <div className={classes.main}>
                <div className={classes.containerFluid} style={{ padding: "100px 8%", marginTop: "50px" }}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={9}>
                            <div className={classes.containerFluid}>
                                <h3>My courses</h3>

                            </div>

                        </GridItem>
                    </GridContainer>

                </div>

            </div>

        </div>
    )
}

export default index