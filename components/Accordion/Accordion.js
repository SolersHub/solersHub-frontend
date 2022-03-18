import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from "components/CustomButtons/Button.js";
import Divider from '@material-ui/core/Divider';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent/index';
import { MenuBookOutlined, MoreVert } from '@material-ui/icons';
import { black, gold, pink, white } from "styles/colors"
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyle = makeStyles(styles);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

export default function DetailedAccordion() {
    const classes = useStyles();
    const classe = useStyle()

    return (
        <div className={classes.root} style={{ marginBottom: "30px" }} >
            <Accordion defaultExpanded style={{ padding: "30px auto" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ width: "48px", height: "36px" }} />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column} style={{ paddingLeft: "20px" }}>
                        <Typography className={classes.heading} style={{ textTransform: "uppercase", fontWeight: "400" }}>course</Typography>
                        <h3 style={{ fontSize: "20px", fontWeight: "500" }}>Learn Forex</h3>

                    </div>
                </AccordionSummary>
                <div className={classe.containerFluid}>
                    <Button
                        href="#"
                        className={classes.navLink}
                        onClick={() => { }}
                        style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: black, border: "1px solid black", color: white, padding: "10px 18px", marginLeft: "3%" }}
                    >
                        Edit
                    </Button>
                    <div className={classe.container} style={{ backgroundColor: pink, height: "60px", margin: "2px 3% 20px 3%", width: "94%", display: "flex", justifyContent: "space-between" }}>
                        <h3 style={{ margin: "auto 0" }}>Introduction</h3>
                        <div style={{ margin: "auto 0" }}>
                            <Button
                                href="#"
                                className={classes.navLink}
                                onClick={() => { }}
                                style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: black, border: "1px solid black", color: white, padding: "10px 18px" }}
                            >
                                Edit
                            </Button>
                            <Button
                                href="#"
                                className={classes.navLink}
                                onClick={() => { }}
                                style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black", padding: "10px 18px" }}
                            >
                                Add video
                            </Button>

                        </div>
                    </div>

                </div>


                <div className={classe.containerFluid}>
                    <div className={classe.container} style={{ backgroundColor: pink, height: "60px", margin: "2px 3% 20px 3%", width: "94%", display: "flex", justifyContent: "space-between" }}>
                        <h3 style={{ margin: "auto 0" }}>Concept of Forex</h3>
                        <div style={{ margin: "auto 0" }}>

                            <Button
                                href="#"
                                justIcon
                                className={classes.navLink}
                                onClick={() => { }}
                                style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: black, border: "1px solid black", color: white, padding: "10px 18px" }}
                            >
                                <MoreVert />
                                More
                            </Button>
                            <Button
                                href="#"
                                className={classes.navLink}
                                onClick={() => { }}
                                style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black", padding: "10px 18px" }}
                            >
                                Add video
                            </Button>

                        </div>
                    </div>

                </div>

                <AccordionActions style={{ paddingRight: "5%" }}>
                    <Button
                        href="#"
                        className={classes.navLink}
                        onClick={() => { }}
                        style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "#ffe6bc", border: "1px solid black", color: "black", padding: "10px 18px" }}
                    >
                        Add Sections
                    </Button>
                    <Button
                        href="#"
                        className={classes.navLink}
                        onClick={() => { }}
                        style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: black, border: "1px solid black", color: white, padding: "10px 18px" }}
                    >
                        Publish
                    </Button>
                </AccordionActions>
            </Accordion>
        </div>
    );
}
