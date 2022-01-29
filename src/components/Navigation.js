import React from "react";

// menu pages
import MenuItem from "./MenuItem";
import { useStyles } from  "../styles";

import routes from "../routes";

// @material-ui
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

// assets
import logo from "../logo.png";

const Navigation = () => {
    const classes = useStyles();
        return (
        <div> 
            <Drawer 
                    classes={{ paper: classes.navigationDrawer }}
                    variant="permanent" 
                    open={true}
                > 
               <div className={classes.navigationLogoContainer}>
                        <img 
                            className={classes.navigationLogo} 
                            src={logo} 
                            alt="Paking Logo" 
                            />
                      </div>
                      
                          <List className={classes.navigationList}>
                                 {routes.map((route, index) => {
                                     return (
                                         <React.Fragment>
                                            {route.path === "/sign-out" && ( 
                                                <div 
                                                    className={ classes.navigationSpacer }></div>
                                                )}
                                             <MenuItem 
                                                 label={route.label}
                                                 icon={route.icon}
                                                 activeIcon={route.activeIcon}
                                                 path={route.path} 
                                             />
                                         </React.Fragment>
                                     );
                                 })}    
                          </List>
                </Drawer>
        </div>
    );
};  
export default Navigation;


 