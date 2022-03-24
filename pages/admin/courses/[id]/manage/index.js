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
import { getOne, addImage } from "utils/helpers/courses"
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
    const [data, setData] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const [image, setImage] = React.useState({})


    React.useEffect(() => {

        setLoading(false)
        getOne(id).then((response) => {
            setData(response.data.data.course)
            setLoading(false)
            console.log(response.data.data.course)
        })


    }, [id])

    const uploadImage = (event) => {
        setLoading(true)

        const file = event.target.files[0];
        setImage(event.target.files[0]);
        const formData = new FormData();
        formData.append("image", file, "backdrop.jpg");
        console.log(file)
        console.log(formData)
        addImage(id, formData).then((response) => {
            if (response.data.status == "success") {
                setLoading(false)
            }
            console.log(response.data)
        })





    };

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
                                <h3>Course details</h3>
                                <hr style={{ height: "0px", borderBottom: "0.2px", marginTop: "30px" }} />
                                <div className={classes.containerFluid}>
                                    <div className="form-group" style={{ marginTop: "30px" }}>
                                        <label style={{ color: "black" }}>Course title</label>
                                        <input type="text" value={data.name} style={{ width: "100%", border: "1px solid black", height: "50px", padding: "10px 20px" }} />

                                    </div>

                                    <div className="form-group" style={{ marginTop: "30px" }}>
                                        <label style={{ color: "black" }}>Course subtitle</label>
                                        <input type="text" value={data.summary} style={{ width: "100%", border: "1px solid black", height: "50px", padding: "10px 20px" }} />

                                    </div>
                                    <div className="form-group" style={{ marginTop: "30px" }}>
                                        <label style={{ color: "black" }}>Course description</label>
                                        <textarea type="text" value={data.description} style={{ width: "100%", border: "1px solid black", padding: "10px 20px" }} />

                                    </div>
                                    <div className="form-group" style={{ marginTop: "30px" }}>
                                        <label style={{ color: "black", marginBottom: "12px" }}>Course image</label>
                                        <GridContainer>
                                            <GridItem md={6} >
                                                <div className={classes.containerFluid}>
                                                    <img src={data.image ? `https://solershub-backend.herokuapp.com/${data.image}` : "/img/placeholder2.jpg"} style={{ width: "100%", height: "auto" }} />

                                                </div>

                                            </GridItem>
                                            <GridItem md={6} >
                                                <p>Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.</p>
                                                <div className="custom-file-upload" style={{ width: "100%", border: "1px solid black", height: "50px", display: "flex", marginRight: "0px", justifyContent: "space-between" }}>
                                                    <input htmlFor="file" value={loading === true ? `uploading ${image.name} ` : (image.name) ? image.name : "No file selected"} type="text" disabled className="file-upload-input" style={{ height: "100%", border: "none", width: "60%", padding: "12px 20px", cursor: "pointer" }} />
                                                    <label htmlFor="file" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", padding: "12px 20px", height: "100%", color: "black", cursor: "pointer" }}>Select a File</label>


                                                </div>
                                                <input id="file" className="custom-file-upload-hidden" onChange={uploadImage} type="file" style={{ display: "none" }} />


                                            </GridItem>
                                        </GridContainer>

                                    </div>

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
