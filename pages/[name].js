import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "swiper/swiper-bundle"
import Skeleton from '@material-ui/lab/Skeleton';
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import { Fade } from "react-awesome-reveal";
// sections for this page

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import Router, { useRouter } from "next/router";
import { black, gold, pink, white } from "styles/colors"


const useStyles = makeStyles(styles);

export default function search(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const router = useRouter()
    const { name, q } = router.query


    React.useEffect(() => {


        console.log("hola")


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


            <div className={classNames(classes.main)} style={{ backgroundColor: "white" }}>
                <div
                    className={classes.containerFluid}
                    style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "4%", paddingBottom: "4%", marginTop: "70px" }}
                >
                    <h3 style={{ fontWeight: "600", fontSize: "28px", color: "black" }}>5,890 results for “{q}”</h3>
                    <div
                        className={classes.containerFluid}
                        style={{ paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%", paddingBottom: "2%", marginTop: "20px" }}
                    >
                        <GridContainer>
                            <GridItem sm={3}>
                                <Skeleton variant="rect" width={210} height={118} />
                            </GridItem>
                            <GridItem sm={9}>
                                <Skeleton variant="text" width={310} />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" width={210} />

                            </GridItem>
                        </GridContainer>
                    </div>
                    <div
                        className={classes.containerFluid}
                        style={{ paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%", paddingBottom: "2%", marginTop: "20px" }}
                    >
                        <GridContainer>
                            <GridItem sm={3}>
                                <Skeleton variant="rect" width={210} height={118} />
                            </GridItem>
                            <GridItem sm={9}>
                                <Skeleton variant="text" width={310} />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" width={210} />

                            </GridItem>
                        </GridContainer>
                    </div>
                    <div
                        className={classes.containerFluid}
                        style={{ paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%", paddingBottom: "2%", marginTop: "20px" }}
                    >
                        <GridContainer>
                            <GridItem sm={3}>
                                <Skeleton variant="rect" width={210} height={118} />
                            </GridItem>
                            <GridItem sm={9}>
                                <Skeleton variant="text" width={310} />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" width={210} />

                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    );
}
