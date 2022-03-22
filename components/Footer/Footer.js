/*eslint-disable*/
import React from "react";
import Link from "next/link";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const year = new Date().getFullYear();
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  return (
    <div id="footer" className={classes.containerFluid} style={{ paddingLeft: '8.5%', paddingRight: '8.5%', paddingTop: "4%", paddingBottom: "4%", marginBottom: "-8px", backgroundColor: "black", color: "white" }}>
      <GridContainer>
        <GridItem md={3} style={{ textAlign: "left" }}>
          <div className={classes.containerFluid} >
            <Link href="/components" as="/components">
              <h3 style={{ fontWeight: "500", fontSize: "24px", color: "white", marginBottom: "36px", marginTop: "20px" }}>Solers<span style={{ color: "#f4522c" }}>Hub</span></h3>
            </Link>

            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Teach on SolersHub</a>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>About Us</a>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Contact Us</a>
          </div>


        </GridItem>

        <GridItem md={3} style={{ textAlign: "left" }}>



          <div className={classes.containerFluid}>
            <h3 style={{ fontSize: "20px", lineHeight: "30px", fontWeight: "600", marginBottom: "36px" }}>Explore</h3>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Careers</a>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Blog</a>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Help and support</a>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Affiliate</a>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Investors</a>
          </div>
        </GridItem>

        <GridItem md={3} style={{ textAlign: "left" }}>

          <div className={classes.containerFluid} >
            <h3 style={{ fontSize: "20px", lineHeight: "30px", fontWeight: "600", marginBottom: "36px" }}>Company</h3>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Terms of use</a>
            <a href="#" style={{ display: "block", marginBottom: "8px", color: "white", fontWeight: "400" }}>Privacy policy</a>
          </div>



        </GridItem>
      </GridContainer>
      <div className={classes.containerFluid} style={{ display: "flex", justifyContent: "space-between", paddingTop: "3.5%" }}></div>
      <p style={{ fontWeight: "400", color: "white", textAlign: "left" }}>Copyright © {year} SolersHub. All Rights Reserved.</p>
      <div></div>
    </div>

  );
}


Footer.propTypes = {
  whiteFont: PropTypes.bool,
};

