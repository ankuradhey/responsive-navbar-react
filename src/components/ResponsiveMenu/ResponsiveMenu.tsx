import React from "react";
import {
    Logo,
    Navbar,
} from "../../library/Menu";
import {
    NavLinks,
} from "../../config";
import './ResponsiveMenu.scss';
import Actions from '../Actions';

const ResponsiveMenu = () => {
    const ActionsArr = [
      <Actions className="user" input="dkgndkgnd"/>,
      <Actions className="schedule" input="uherher"/>
    ];
    return (
      <Navbar 
        className="container-fluid navbar"
        logo={<Logo logoClassName="logo__custom"/>}
        menuItems={NavLinks}
        menuItemsClassName="menuItems__custom"
        secondaryMenuItems={ActionsArr}
      >
      </Navbar>
    );
};

export default ResponsiveMenu;
