import React, { useState } from "react";

import { useStyles } from "../styles";
import clsx from "clsx";

// kanan @material-ui
import Icon from "@material-ui/core/Icon";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


const MenuItem = ({ label, icon, activeIcon, path }) => {
    const classes = useStyles();
    const [active, setActive] = React.useState(true); // para maiba it icon ha active ngan dre
    
    return (
            <ListItem className={clsx(classes.menuItem, active && classes.menuItemActive)}>
                <ListItemIcon>
                    <Icon>
                        <img className={classes.menuItemIcon} src={active ? activeIcon : icon} alt={label} />
                    </Icon>
                  </ListItemIcon> 
                        <ListItemText primary={label} primaryTypographyProps={{  variant: "body2" }} 
                        />
            </ListItem> 
    );       
};
export default MenuItem;
