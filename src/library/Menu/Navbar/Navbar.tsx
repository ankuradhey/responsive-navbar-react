import React, { FC, useState } from "react";
import "./Navbar.scss";
import { MdClass, MdDataUsage } from "react-icons/md";
import HamburgerSVG from "../../../hamburger.svg";
import {
    NavItem,
    Nav,
    NavLink,
    NavbarToggler,
    NavbarCollapse,
} from "..";

type toggleState = "expanded" | "collapsed";
 
interface Props {
  className: string;
  logo: React.ReactNode;
  menuItems: Array<any>;
  menuItemsClassName: string;
  secondaryMenuItems: Array<React.ReactNode>;
}

const Navbar: FC<Props> = ({className, logo, menuItems, menuItemsClassName, secondaryMenuItems }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const clickHandler = () => {
        setCollapsed(!collapsed);
    };
    const expanded = true;
    return (
        <nav className={`navbar action-items ${className} ${!expanded ? "collapsed" : "expanded"}`}>
            <NavItem>
              {logo}
            </NavItem>
            <NavbarCollapse isOpen={!collapsed} onClick={clickHandler}>
                <Nav lg={{ hidden: true }}>
                    {menuItems.map((link) => (
                        <NavItem>
                            <NavLink href={link.href}>{link.label}</NavLink>
                        </NavItem>
                    ))}
                </Nav>
                <Nav lg={{ hidden: true }}>
                  {secondaryMenuItems.map((Action) => (
                      <>
                        {Action}
                      </>
                  ))}
                </Nav>
            </NavbarCollapse>
            <Nav md={{ hidden: true }} sm={{ hidden: true }}>
                {menuItems.map((link) => (
                    <NavItem>
                        <NavLink href={link.href}>{link.label}</NavLink>
                    </NavItem>
                ))}
            </Nav>
            <Nav sm={{ hidden: true }} right>
              {secondaryMenuItems.map((Action) => (
                <>
                  {Action}
                </>
              ))}
            </Nav>
            <NavItem lg={{ hidden: true }}>
                <NavbarToggler
                    icon={HamburgerSVG}
                    onClick={clickHandler}
                    collapsed={collapsed}
                />
            </NavItem>
        </nav>
    );
};

export default Navbar;
