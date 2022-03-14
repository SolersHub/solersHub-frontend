/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          navDropdown
          buttonText="Categories"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          hoverColor="black"
          style={{ color: "black", backgroundColor: "transparent", fontWeight: "500" }}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>Categories</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "white", border: "1px solid black", color: "black", padding: "10px 18px" }}
        >
          Login
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          className={classes.navLink}
          style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "black", border: "1px solid black", color: "white", padding: "10px 18px" }}
        >
          Sign Up
        </Button>
      </ListItem>


    </List>
  );
}
