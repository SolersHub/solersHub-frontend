import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "swiper/swiper-bundle"
import Skeleton from '@material-ui/lab/Skeleton';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import toast, { Toaster } from "react-hot-toast"
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
import { search } from "utils/helpers/search/index"
import { getOne, addImage, addSection, updateSection, deleteSection } from "utils/helpers/courses"
import { Apps, CloudDownload, Delete, Edit } from "@material-ui/icons";
// sections for this page

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import Router, { useRouter } from "next/router";
import { black, gold, pink, white } from "styles/colors"


const useStyles = makeStyles(styles);

export default function searchquery(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const router = useRouter()
    const { name, q, id } = router.query
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [image, setImage] = React.useState({})
    const [add, setAdd] = React.useState(true)
    const [sectionName, setSectionName] = React.useState("")


    React.useEffect(() => {
        getCourse()



    }, [id])

    function getCourse() {
        setLoading(false)
        getOne(id).then((response) => {
            setData(response.data.data.course.sections)
            setLoading(false)
            console.log(response.data.data.course)
            console.log(response.data.data.course.sections)
        })

    }

    function _delete(e) {
        const sid = e.currentTarget.value
        deleteSection(id, sid).then((response) => {
            toast.success("removed successfully")
            getCourse()
            console.log(response.data)
            // if (response.data.status == "success") {
            //     toast.success("removed successfully")
            //     getCourse()
            // }

        }).catch((error) => {
            toast.error("something went wrong. try again")
        })

    }

    function addSections() {

        const body = {
            name: sectionName,
            index: 0
        }
        addSection(id, body).then((response) => {
            console.log(response.data)
            if (response.data.status == "success") {
                toast.success("section added successfully")
                getCourse()
            }

        }).catch((error) => {
            toast.error("something went wrong. try again")
        })
    }

    return (
        <div>
            <Toaster />
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


            <div className={classNames(classes.main)} style={{ backgroundColor: pink }}>
                <div
                    className={classes.containerFluid}
                    style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "4%", paddingBottom: "4%", marginTop: "70px" }}
                >
                    <GridContainer>
                        <GridItem md={3}>
                            <div className={classes.containerFluid} style={{ paddingLeft: "6%", paddingRight: "6%", paddingTop: "4%", paddingBottom: "4%", marginTop: "70px", backgroundColor: "white", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
                                <h3 style={{ fontWeight: "500", fontSize: "18px", marginLeft: "15px" }}>Add Content</h3>
                                <List>
                                    <ListItem style={{}}>
                                        <Link href={`/admin/courses/${id}/manage`}><a>Edit Details</a></Link>

                                    </ListItem>
                                    <ListItem style={{}}>
                                        <Link href={`/admin/courses/${id}/manage/sections`}><a> Add Sections</a></Link>

                                    </ListItem>
                                </List>
                                <h3 style={{ fontWeight: "500", fontSize: "18px", marginLeft: "15px" }}>Publish Content</h3>
                                <List>
                                    <ListItem style={{}}>Details</ListItem>
                                    <ListItem style={{}}>Add Sections
                                    </ListItem>
                                </List>
                            </div>


                        </GridItem>
                        <GridItem md={9}>
                            <div className={classes.containerFluid}
                                style={{ paddingLeft: "6%", paddingRight: "6%", paddingTop: "4%", paddingBottom: "4%", marginTop: "70px", backgroundColor: "white", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
                                <h3>Add sections</h3>
                                <hr style={{ height: "0px", borderBottom: "0.2px", marginTop: "30px" }} />
                                <div className={classes.containerFluid}>
                                    {data ? (data.map(item => <div key={item._id} className={classes.containerFluid} style={{ backgroundColor: pink, padding: "20px 20px", marginBottom: "25px", border: "1px solid black" }}>

                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <h3 style={{ fontWeight: "500", fontSize: "18px", color: "black" }}>Section {(data.findIndex(object => {
                                                return object._id === item._id;
                                            })) + 1}: {item.name}</h3>  <Edit /> <Button value={item._id} onClick={_delete} style={{ backgroundColor: "transparent", border: "none" }}> <Delete /></Button>

                                        </div>



                                        <div className={classes.container} style={{ backgroundColor: "white", border: "1px solid black", padding: "0px 0px", }}>
                                            <div className={classes.containerFluid} style={{ padding: "4px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid black" }}>
                                                <h3> Lecture {(data.findIndex(object => {
                                                    return object._id === item._id;
                                                })) + 1}</h3>
                                                <Button style={{ padding: "12px 20px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black" }}>+ Content</Button>
                                            </div>


                                        </div>


                                    </div>)) :
                                        <div className={classes.containerFluid} style={{ backgroundColor: pink, padding: "20px 20px", marginBottom: "25px", border: "1px solid black" }}>


                                            <h3 style={{ fontWeight: "500", fontSize: "18px", color: "black" }}>Section 1: introduction</h3>

                                            <div className={classes.container} style={{ backgroundColor: "white", border: "1px solid black", padding: "0px 0px", }}>
                                                <div className={classes.containerFluid} style={{ padding: "4px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid black" }}>
                                                    <h3> Lecture 1</h3>
                                                    <Button style={{ padding: "12px 20px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black" }}>+ Content</Button>
                                                </div>


                                            </div>


                                        </div>}

                                    <div className={classes.containerFluid} style={{ backgroundColor: "white", padding: "20px 20px", marginBottom: "25px", border: "1px solid black", }}>


                                        <h3 style={{ fontWeight: "500", fontSize: "18px", color: "black" }}>New Section</h3>

                                        <div className={classes.container} style={{ backgroundColor: "white", padding: "0px 0px", }}>
                                            <div className={classes.containerFluid} style={{ padding: "4px 20px", }}>
                                                <input onChange={(e) => { setSectionName(e.target.value) }} type="text" style={{ width: "100%", border: "1px solid black", height: "50px", padding: "10px 20px" }} />
                                                <Button onClick={addSections} style={{ padding: "12px 20px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black", marginTop: "20px" }}>save</Button>
                                            </div>


                                        </div>

                                    </div>

                                    <Button
                                        onClick={() => { }}
                                        style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black", padding: "10px 18px" }}
                                    >
                                        Add section
                                    </Button>


                                </div>
                            </div>

                        </GridItem>
                    </GridContainer>
                </div>
            </div >
            <Footer />
        </div >
    );
}
