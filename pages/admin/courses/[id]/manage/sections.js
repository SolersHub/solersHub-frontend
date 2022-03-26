import React, { useState, useEffect, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import S3 from "utils/aws"
import AWS from 'aws-sdk'
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
import { getOne, addImage, addSection, updateSection, deleteSection, sectionVideo, publishCourse, } from "utils/helpers/courses"
import { Apps, CloudDownload, Delete, Edit, FlashOffTwoTone, Movie, TextFields } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';
// sections for this page

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import Router, { useRouter } from "next/router";
import { black, gold, pink, white } from "styles/colors"

const S3_BUCKET = 'solershubfiles';
const REGION = 'us-east-1';


AWS.config.update({
    accessKeyId: 'AKIA2P4DP5VED7Y4HKF6',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})


const useStyles = makeStyles(styles);

export default function searchquery(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const router = useRouter()
    const { name, q, id } = router.query
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [image, setImage] = React.useState({})
    const [add, setAdd] = React.useState(false)
    const [sectionName, setSectionName] = React.useState("")
    const [edit, setEdit] = React.useState("")
    const [show, setShow] = React.useState(false);
    const [content, setContent] = React.useState("")
    const [addC, setAddC] = React.useState(false)
    const [video, setVideo] = React.useState(false)
    const [text, setText] = React.useState(false)
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [vid, setVid] = React.useState("");
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

    function publish() {
        publishCourse(id).then((response) => {
            toast.success("removed successfully")
            Router.push("/admin")
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
                setAdd(false)
                getCourse()
            }

        }).catch((error) => {
            toast.error("something went wrong. try again")
        })
    }
    function updateSections(e) {
        const sid = e.currentTarget.value

        const body = {
            name: sectionName,
        }
        updateSection(id, sid, body).then((response) => {
            console.log(response.data)
            if (response.data.status == "success") {
                toast.success("section added successfully")
                setAdd(false)
                setShow(!show)
                getCourse()
            }

        }).catch((error) => {
            toast.error("something went wrong. try again")
        })
    }

    function addSectionVid() {
        const body = {
            "videoText": "Seven",
            "videoTitle": "Welcome to the course!",
            "videoURL": `https://solershubfiles.s3.amazonaws.com/${vid}`,
            "index": 0
        }
        sectionVideo(id, content, body).then((response) => {
            console.log(response.data)
            if (response.data.status == "success") {
                toast.success("section added successfully")
                setAdd(false)
                setContent("");
                setAddC(false)
                getCourse()
            }

        }).catch((error) => {
            toast.error("something went wrong. try again")
        })
    }

    function uploadVideo(e) {
        const file = e.currentTarget.files[0];
        setLoading(true)
        setImage(file)
        const formData = new FormData();
        formData.append("image", file);
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: `${content}${file.name}`
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            }).on('success', function (response) {
                console.log("Key was", response.request.params.Key)
                setVid(response.request.params.Key)
            }).send((err) => {
                if (err) console.log(err)
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
                                    <ListItem style={{}}>
                                        <Link href={`/admin/courses/${id}/manage/pricing`}><a> Pricing</a></Link>

                                    </ListItem>
                                    <ListItem style={{}}>Add Sections
                                    </ListItem>
                                </List>
                                <List>
                                    <Button
                                        onClick={publish}
                                        style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "black", border: "1px solid black", color: "white", padding: "10px 18px" }}
                                    >
                                        Publish
                                    </Button>
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
                                            })) + 1}: {item.name}</h3>
                                            <IconButton onClick={() => { setEdit(item._id); setShow(!show) }} aria-label="delete" style={{ marginBottom: "-4px" }}>
                                                <Edit />
                                            </IconButton>
                                            <IconButton value={item._id} onClick={_delete} aria-label="delete" style={{ marginBottom: "-4px" }}>
                                                <Delete />
                                            </IconButton>


                                        </div>



                                        <div className={classes.container} style={{ backgroundColor: "white", border: "1px solid black", padding: "0px 0px", }}>
                                            {edit === item._id && show === true ? <div className={classes.containerFluid} style={{ padding: "4px 20px", marginTop: "10px" }}>
                                                <input defaultValue={item.name} onChange={(e) => { setSectionName(e.target.value) }} type="text" style={{ width: "100%", border: "1px solid black", height: "50px", padding: "10px 20px" }} />
                                                <Button onClick={updateSections} value={item._id} style={{ padding: "12px 20px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black", marginTop: "20px" }}>save</Button>
                                            </div> : <>
                                                <div className={classes.containerFluid} style={{ padding: "4px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid black" }}>
                                                    <h3> Lecture {(data.findIndex(object => {
                                                        return object._id === item._id;
                                                    })) + 1}</h3>
                                                    <Button onClick={() => { setContent(item._id); setAddC(true); setVideo(false); }} style={{ padding: "12px 20px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black" }}>+ Content</Button>
                                                </div>
                                                {content === item._id && addC === true ? <div className={classes.containerFluid}>
                                                    <h3 style={{ fontWeight: "500", fontSize: "18px", color: "black", textAlign: "center" }}>Choose Content Type</h3>
                                                    <div className={classes.container} style={{ marginBottom: "20px", display: "flex", justifyContent: "space-around" }}>
                                                        <div onClick={() => { setContent(item._id); setVideo(true); setAddC(false) }} style={{ width: "80px", height: "80px", backgroundColor: pink, display: "block", justifyContent: "center", paddingTop: "4px", border: "1px solid black", cursor: "pointer" }}>
                                                            <Movie style={{ margin: "5px auto 5px auto", display: "block", }} />
                                                            <h4 style={{ fontWeight: "500", textAlign: "center" }}>Video</h4>
                                                        </div>
                                                        <div style={{ width: "80px", height: "80px", backgroundColor: pink, display: "block", justifyContent: "center", paddingTop: "4px", border: "1px solid black" }}>
                                                            <TextFields style={{ margin: "5px auto 5px auto", display: "block", }} />
                                                            <h4 style={{ fontWeight: "500", textAlign: "center" }}>Text</h4>
                                                        </div>

                                                    </div>
                                                    <h3 onClick={() => { setContent(""); setAddC(false) }} style={{ fontWeight: "500", fontSize: "18px", color: "black", textAlign: "right", cursor: "pointer", marginBottom: "20px" }}>close</h3>
                                                </div> :
                                                    <>
                                                        {item.sub.map(items => <div className={classes.container} key={items.date}>
                                                            {items.type === "video" ? <div style={{ display: "flex", alignItems: "center" }}><h3 style={{ fontWeight: "500", fontSize: "16px", color: "black" }}>{(items.index + 1)}.</h3> <Movie style={{ marginRight: "5px", display: "block", marginBottom: "-3px" }} /><h3 style={{ fontWeight: "500", fontSize: "16px", color: "black" }}>  {items.videoTitle}</h3></div> : ""}
                                                        </div>)}

                                                    </>}
                                                {content === item._id && video === true ? <div className={classes.containerFluid}>
                                                    <h3 style={{ fontWeight: "500", fontSize: "18px", color: "black", textAlign: "center" }}>Choose Content Type</h3>
                                                    <div className={classes.container} style={{ marginBottom: "20px", }}>
                                                        <input type="text" placeholder="Title" style={{ width: "100%", border: "1px solid black", height: "45px", padding: "10px 20px", marginBottom: "20px" }} />
                                                        <div className="custom-file-upload" style={{ width: "100%", border: "1px solid black", height: "50px", display: "flex", marginRight: "0px", justifyContent: "space-between" }}>
                                                            <input value={loading === true ? `uploading ${progress}% ` : (image.name) ? image.name : "No file selected"} htmlFor="file" type="text" disabled className="file-upload-input" style={{ height: "100%", border: "none", width: "60%", padding: "12px 20px", cursor: "pointer" }} />
                                                            <label htmlFor="file" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", padding: "12px 20px", height: "100%", color: "black", cursor: "pointer" }}>Select a File</label>


                                                        </div>
                                                        <input onChange={uploadVideo} id="file" className="custom-file-upload-hidden" type="file" style={{ display: "none" }} />
                                                    </div>
                                                    <div className={classes.containerFluid} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                        <Button
                                                            onClick={addSectionVid}
                                                            style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "black", border: "1px solid black", color: "white", padding: "10px 18px" }}
                                                        >
                                                            Save
                                                        </Button>
                                                        <h3 onClick={() => { setContent(""); setAddC(false) }} style={{ fontWeight: "500", fontSize: "18px", color: "black", textAlign: "right", cursor: "pointer", marginBottom: "20px" }}>cancel</h3>
                                                    </div>

                                                </div> : <></>}

                                            </>}



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

                                    {add === true ? <div className={classes.containerFluid} style={{ backgroundColor: "white", padding: "20px 20px", marginBottom: "25px", border: "1px solid black", }}>


                                        <h3 style={{ fontWeight: "500", fontSize: "18px", color: "black" }}>New Section</h3>

                                        <div className={classes.container} style={{ backgroundColor: "white", padding: "0px 0px", }}>
                                            <div className={classes.containerFluid} style={{ padding: "4px 20px", }}>
                                                <input onChange={(e) => { setSectionName(e.target.value) }} type="text" style={{ width: "100%", border: "1px solid black", height: "50px", padding: "10px 20px" }} />
                                                <Button onClick={addSections} style={{ padding: "12px 20px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black", marginTop: "20px" }}>save</Button>
                                                <Button onClick={() => { setAdd(false) }} style={{ padding: "12px 20px", backgroundColor: "black", border: "1px solid black", color: "white", marginTop: "20px" }}>cancel</Button>
                                            </div>


                                        </div>

                                    </div> : <></>}



                                    <Button
                                        onClick={() => { setAdd(true) }}
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
