import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { MenuBookOutlined, MoreVert } from '@material-ui/icons';
import { useAuth } from "utils/hooks/useAuth"

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/customDropdownStyle.js";

const useStyles = makeStyles(styles);

export default function CustomDropdown(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const auth = useAuth();
    const handleClick = (event) => {
        if (anchorEl && anchorEl.contains(event.target)) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = (param) => {
        setAnchorEl(null);
        if (props && props.onClick) {
            props.onClick(param);
        }
    };
    const handleCloseAway = (event) => {
        if (anchorEl.contains(event.target)) {
            return;
        }
        setAnchorEl(null);
    };
    const classes = useStyles();
    const {
        buttonText,
        buttonIcon,
        dropdownList,
        buttonProps,
        dropup,
        dropdownHeader,
        caret,
        hoverColor,
        more,
        left,
        rtlActive,
        noLiPadding,
        navDropdown,
        color
    } = props;
    const caretClasses = classNames({
        [classes.caret]: true,
        [classes.caretActive]: Boolean(anchorEl),
        [classes.caretRTL]: rtlActive,
    });
    const dropdownItem = classNames({
        [classes.dropdownItem]: true,
        [classes[hoverColor + "Hover"]]: true,
        [classes.noLiPadding]: noLiPadding,
        [classes.dropdownItemRTL]: rtlActive,
    });
    let icon = null;
    switch (typeof buttonIcon) {
        case "object":
            icon = <props.buttonIcon className={classes.buttonIcon} />;
            break;
        case "string":
            icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
            break;
        default:
            icon = null;
            break;
    }
    return (
        <div>
            <div>
                <Button
                    aria-label="Notifications"
                    aria-owns={anchorEl ? "menu-list" : null}
                    aria-haspopup="true"
                    {...buttonProps}
                    onClick={handleClick}
                    style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: color ? color : "transparent", color: color ? "white" : "black", padding: "10px 18px", width: "40px", height: "40px", borderRadius: "50%" }}
                >
                    {icon}
                    {more ? <MoreVert /> : null}
                    {buttonText !== undefined ? buttonText : "AG"}



                </Button>
            </div>
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                transition
                disablePortal
                placement={
                    dropup
                        ? left
                            ? "top-start"
                            : "top"
                        : left
                            ? "bottom-start"
                            : "bottom"
                }
                className={classNames({
                    [classes.popperClose]: !anchorEl,
                    [classes.popperResponsive]: true,
                    [classes.pooperNav]: Boolean(anchorEl) && navDropdown,
                })}
            >
                {() => (
                    <Grow
                        in={Boolean(anchorEl)}
                        id="menu-list"
                        style={
                            dropup
                                ? { transformOrigin: "0 100% 0" }
                                : { transformOrigin: "0 0 0" }
                        }
                    >
                        <Paper className={classes.dropdown} style={{ minWidth: "250px", minHeight: "250px", marginTop: "10px" }}>
                            <ClickAwayListener onClickAway={handleCloseAway}>
                                <MenuList role="menu" className={classes.menuList}>
                                    {dropdownHeader !== undefined ? (
                                        <MenuItem
                                            onClick={() => handleClose(dropdownHeader)}
                                            className={classes.dropdownHeader}
                                        >
                                            {dropdownHeader}
                                        </MenuItem>
                                    ) : null}
                                    {dropdownList ? dropdownList.map((prop, key) => {
                                        if (prop.divider) {
                                            return (
                                                <Divider
                                                    key={key}
                                                    onClick={() => handleClose("divider")}
                                                    className={classes.dropdownDividerItem}
                                                />
                                            );
                                        }
                                        return (
                                            <MenuItem
                                                key={key}
                                                onClick={() => handleClose(prop)}
                                                className={dropdownItem}
                                            >
                                                {prop}
                                            </MenuItem>
                                        );
                                    }) :
                                        <>
                                            <List>
                                                <ListItem>
                                                    Dashboard
                                                </ListItem>
                                                <ListItem>
                                                    Performance
                                                </ListItem>
                                                <ListItem>
                                                    Account
                                                </ListItem>
                                                <ListItem>
                                                    Settings
                                                </ListItem>
                                                <Divider

                                                    onClick={() => { }}
                                                    className={classes.dropdownDividerItem}
                                                />

                                                <ListItem className={classes.listItem}>
                                                    <Button
                                                        href="/join/login"
                                                        className={classes.navLink}
                                                        onClick={() => { auth.signout() }}
                                                        style={{ fontWeight: "500", textTransform: "capitalize", fontSize: "16px", backgroundColor: "black", border: "1px solid black", color: "white", padding: "10px 18px" }}
                                                    >
                                                        Sign Out
                                                    </Button>

                                                </ListItem>
                                            </List>

                                        </>}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

CustomDropdown.defaultProps = {
    caret: true,
    hoverColor: "primary",
};

CustomDropdown.propTypes = {
    hoverColor: PropTypes.oneOf([
        "black",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
    ]),
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    left: PropTypes.bool,
    noLiPadding: PropTypes.bool,
    navDropdown: PropTypes.bool,
    // function that retuns the selected item
    onClick: PropTypes.func,
};
