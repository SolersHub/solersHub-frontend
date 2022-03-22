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

const useStyles = makeStyles(styles);

useEffect(() => {
    if (localStorage.getItem("user") === "" && localStorage.getItem("admin") !== "true") {
        Router.push("/join/login");

    }

}, [])


function learn(props) {
    const classes = useStyles();
    const { ...rest } = props;
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
            <div className={classes.main}>
                <div className={classes.containerFluid}
                    style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "8%", paddingBottom: "4%" }}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={9}>
                            <div className={classes.containerFluid}>
                                <h3 style={{ fontWeight: "500", fontSize: "28px", color: "black" }}>My courses</h3>
                            </div>

                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                            <Hidden smDown implementation="css">

                            </Hidden>

                        </GridItem>

                    </GridContainer>

                </div>

            </div>

        </div>
    )
}

export default learn