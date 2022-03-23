import React, { useState, useEffect, useRef } from 'react'
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import { Fade } from "react-awesome-reveal";
import GridContainer from "components/Grid/GridContainer.js";
import Accordion from "components/Accordion/Accordion.js"
import GridItem from "components/Grid/GridItem.js";
import Slide from "@material-ui/core/Slide";
import Skeleton from '@material-ui/lab/Skeleton';
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
import { getAllCoursesl } from "utils/helpers/courses/index"


import style from "styles/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js";
import { black, gold, pink, white } from "styles/colors"
import { getAllCourses } from '../../utils/helpers/courses';

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
    const [data, setData] = useState({})
    const [courses, setCourses] = useState([])



    useEffect(() => {
        if (localStorage.getItem("user") == "" && localStorage.getItem("admin") !== true) {
            Router.push("/");

        } else {
            setData(JSON.parse(localStorage.getItem("user")).user._id)
            getAllCourses().then((response) => {
                setCourses(response.data.data.courses)
            })
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

            <div className={classes.main} style={{ backgroundColor: pink }}>
                <div className={classes.containerFluid} style={{ padding: "100px 8%", marginTop: "50px" }}>
                    {courses.filter(item => item.owner.toLowerCase().includes(data) && item.status === "inactive").map(item =>
                        <div key={item._id} className={classes.containerFluid} style={{ backgroundColor: "white", paddingLeft: "0px", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", marginBottom: "25px" }}>


                            <GridContainer>
                                <GridItem md={2}>
                                    <div className={classes.containerFluid} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                                        <img src="/img/placeholder.jpg" style={{ width: "100%", height: "auto" }} />
                                    </div>

                                </GridItem>
                                <GridItem md={3} style={{ paddingTop: "3%" }}>
                                    <div className={classes.containerFluid} >
                                        <h3 style={{ fontWeight: "500" }}>{item.name}</h3> <Skeleton variant="text" />
                                        <h4 style={{ fontWeight: "400" }}>Draft</h4>
                                    </div>

                                </GridItem>
                                <GridItem md={7} style={{ paddingTop: "3%" }}>
                                    <div className={classes.containerFluid}>
                                        <h3 style={{ fontWeight: "500" }}>Finish your course</h3>
                                        <Skeleton variant="text" />
                                        <a
                                            href={`/admin/courses/${item._id}/manage`}
                                            style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", color: "black", marginTop: "20px" }}
                                        >
                                            Edit
                                        </a>
                                    </div>

                                </GridItem>
                            </GridContainer>

                        </div>)}

                    <div className={classes.containerFluid} style={{ backgroundColor: "white", paddingLeft: "0px", marginTop: "25px", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
                        <GridContainer>
                            <GridItem md={5}>
                                <div className={classes.containerFluid} style={{ display: "block", margin: "auto auto" }}>
                                    <img src="/img/engaging-course.jpg" style={{ height: "auto" }} />
                                </div>

                            </GridItem>

                            <GridItem md={7} style={{ paddingTop: "3%" }}>
                                <div className={classes.containerFluid} >
                                    <h3 style={{ fontWeight: "500" }}>Create a course</h3>
                                    <Skeleton variant="text" />
                                    <Button
                                        href="#"
                                        className={classes.navLink}
                                        onClick={() => { }}
                                        style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black", padding: "10px 18px", marginTop: "30px" }}
                                    >
                                        create
                                    </Button>
                                </div>

                            </GridItem>
                        </GridContainer>

                    </div>


                </div>

            </div>
            <Footer />

        </div>
    )
}

export default index