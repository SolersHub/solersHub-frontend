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
import TextField from '@material-ui/core/TextField';
import toast, { Toaster } from "react-hot-toast"
import { SettingsPhone, CalendarToday, Person, Phone } from '@material-ui/icons';

const useStyles = makeStyles(styles);

function signup(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const auth = useAuth();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [fullName, setFullName] = useState("")

    console.log(selectedDate);


    useEffect(() => {
        if (localStorage.getItem("user") !== "" && localStorage.getItem("admin") !== "true") {
            Router.push("/learn");

        }

    }, [])


    function handleLogin() {
        auth.signup(fullName, email, phone, selectedDate, password)
            .then((response) => {
                console.log(response)
                if (response.status == "success") {
                    toast.success('signUp Successfully')
                    localStorage.setItem("token", response.token)
                    setSuccess(true)
                    Router.push("/learn");

                } else {
                    toast.error("something went wrong. try again")
                }

            }).catch((error) => {
                toast.error("something went wrong. try again")
            })
    }


    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
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
            <div className={classes.main}>

                <div className={classes.containerFluid}
                    style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "8%", paddingBottom: "4%" }}>
                    <div className="loginBox" style={{ minWidth: "300px", maxWidth: "380px", margin: "4% auto" }}>
                        <h3 style={{ margin: "10px auto", fontWeight: "500", fontSize: "24px", textAlign: "center" }}>Welcome to Sonershub </h3>
                        <h3 style={{ margin: "10px auto", fontWeight: "400", fontSize: "16px", textAlign: "center" }}>Fill in your details to signUp</h3>
                        <hr style={{ height: "0.01px", width: "95%", margin: "6px auto" }} />
                        <div className={classes.containerFluid} style={{ margin: "24px auto" }}>
                            <div style={{ width: "98%", margin: "10px auto", display: "flex", height: "48px", border: "1px solid black", paddingLeft: "20px" }}>
                                <Person style={{ margin: "auto auto" }} />
                                <input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Fullname" type="text" style={{ width: "96%", border: "none", height: "100%", padding: "10px 20px" }} required={true} />
                            </div>
                            <div style={{ width: "98%", margin: "10px auto", display: "flex", height: "48px", border: "1px solid black", paddingLeft: "20px" }}>
                                <Email style={{ margin: "auto auto" }} />
                                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email" type="email" style={{ width: "96%", border: "none", height: "100%", padding: "10px 20px" }} required={true} />
                            </div>
                            <div style={{ width: "98%", margin: "10px auto", display: "flex", height: "48px", border: "1px solid black", paddingLeft: "20px" }}>
                                <Phone style={{ margin: "auto auto" }} />
                                <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="phone number" type="text" style={{ width: "96%", border: "none", height: "100%", padding: "10px 20px" }} required={true} />
                            </div>
                            <div style={{ width: "98%", margin: "10px auto ", display: "flex", height: "48px", border: "1px solid black", paddingLeft: "20px" }}>
                                <CalendarToday style={{ margin: "auto auto", }} />
                                <TextField
                                    id="date"
                                    type="date"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={selectedDate}
                                    onChange={(e) => { setSelectedDate(e.target.value) }}
                                    required={true}
                                    style={{ width: "96%", height: "100%", padding: "10px 20px" }}
                                />
                            </div>
                            <div style={{ width: "98%", margin: "10px auto", display: "flex", height: "48px", border: "1px solid black", paddingLeft: "20px" }}>
                                <Lock style={{ margin: "auto auto" }} />
                                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="password" type="password" style={{ width: "96%", border: "none", height: "100%", padding: "10px 20px" }} required={true} />
                            </div>



                            <Button onClick={handleLogin} style={{ padding: "10px 20px", width: "98%", backgroundColor: "black", color: "white", height: "48px", margin: "10px auto", display: "block" }}>Login</Button>
                            <p style={{ fontSize: "14px", textAlign: "center" }}>By signing up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a> </p>


                        </div>

                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default signup