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
import Button from "components/CustomButtons/Button.js";
import Hidden from "@material-ui/core/Hidden";
import Footer from "components/Footer/Footer.js";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import { useAuth } from "utils/hooks/useAuth"
import Router from "next/router";

const useStyles = makeStyles(styles);

function login(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)



    useEffect(() => {
        if (localStorage.getItem("user") !== "" && localStorage.getItem("admin") !== "true") {
            Router.push("/learn");

        }

    }, [])


    function handleLogin() {
        auth.signin(email, password).then((response) => {
            console.log(response)
            if (response.status == "success") {
                localStorage.setItem("token", response.token)
                setSuccess(true)
                Router.push("/learn");

            }

        })
    }


    return (
        <div><Header
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
            <div className={classes.main}>
                <div className={classes.containerFluid}
                    style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "8%", paddingBottom: "4%" }}>
                    <div className="loginBox" style={{ minWidth: "300px", maxWidth: "380px", margin: "8% auto" }}>
                        <h3 style={{ margin: "10px auto", fontWeight: "500", fontSize: "16px", textAlign: "center" }}>Log In to Your Sonershub Account! </h3>
                        <hr style={{ height: "0.01px", width: "95%", margin: "6px auto" }} />
                        <div className={classes.containerFluid} style={{ margin: "24px auto" }}>
                            <div style={{ width: "98%", margin: "10px auto", display: "flex", height: "48px", border: "1px solid black", paddingLeft: "20px" }}>
                                <Email style={{ margin: "auto auto" }} />
                                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" type="text" style={{ width: "96%", border: "none", height: "100%", padding: "10px 20px" }} />
                            </div>
                            <div style={{ width: "98%", margin: "10px auto", display: "flex", height: "48px", border: "1px solid black", paddingLeft: "20px" }}>
                                <Lock style={{ margin: "auto auto" }} />
                                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" style={{ width: "96%", border: "none", height: "100%", padding: "10px 20px" }} />
                            </div>

                            <Button onClick={handleLogin} style={{ padding: "10px 20px", width: "98%", backgroundColor: "black", color: "white", height: "48px", margin: "0 auto", display: "block" }}>Login</Button>



                        </div>

                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default login