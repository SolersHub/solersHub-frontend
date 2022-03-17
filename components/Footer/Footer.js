/*eslint-disable*/
import React from "react";
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
    <div id="footer" className={classes.containerFluid} style={{ paddingLeft: '8.5%', paddingRight: '8.5%', paddingTop: "4%", paddingBottom: "4%", marginBottom: "-8px" }}>
      <GridContainer>
        <GridItem md={3} style={{ textAlign: "left" }}>
          <div className={classes.containerFluid} >
            <img src="/img/logo2.png" style={{ width: "130px", height: "auto", marginBottom: "36px", marginTop: "20px" }} />
            <p style={{ fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#2C2C2C" }}>Our job is filling your tummy with delicious food on time.</p>
          </div>


        </GridItem>

        <GridItem md={3} style={{ textAlign: "left" }}>



          <div className={classes.containerFluid}>
            <h3 style={{ fontSize: "20px", lineHeight: "30px", fontWeight: "600", marginBottom: "36px" }}>Explore</h3>
            <a href="#order-a-deal" style={{ display: "block", marginBottom: "18px", color: "#2C2C2C", fontWeight: "400" }}>Order a meal</a>
            <a href="#earn-with-munche" style={{ display: "block", marginBottom: "18px", color: "#2C2C2C", fontWeight: "400" }}>Join Delivery Network</a>
          </div>
        </GridItem>

        <GridItem md={3} style={{ textAlign: "left" }}>

          <div className={classes.containerFluid} >
            <h3 style={{ fontSize: "20px", lineHeight: "30px", fontWeight: "600", marginBottom: "36px", }}>Services</h3>
            <a href="#" style={{ display: "block", marginBottom: "18px", color: "#2C2C2C", fontWeight: "400" }}>P2P Delivery</a>
          </div>


        </GridItem>
        <GridItem md={3} style={{ textAlign: "left" }}>

          <div className={classes.containerFluid} >
            <h3 style={{ fontSize: "20px", lineHeight: "30px", fontWeight: "600", marginBottom: "36px" }}>Company</h3>
            <a href="#earn-with-munche" style={{ display: "block", marginBottom: "18px", color: "#2C2C2C", fontWeight: "400" }}>Join the Munche Team</a>
            <a href="#" style={{ display: "block", marginBottom: "18px", color: "#2C2C2C", fontWeight: "400" }}>Investors</a>
          </div>



        </GridItem>
      </GridContainer>
      <hr style={{ height: 0, borderTop: "0.7px", marginTop: "4%" }} />
      <div className={classes.containerFluid} style={{ display: "flex", justifyContent: "space-between", paddingTop: "3%" }}></div>
      <p style={{ fontWeight: "400", color: "#2C2C2C", textAlign: "center" }}>Copyright © {year} Munchee. All Rights Reserved.</p>
      <div></div>
    </div>

  );
}


Footer.propTypes = {
  whiteFont: PropTypes.bool,
};

