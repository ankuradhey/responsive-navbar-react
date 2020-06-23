import React, { FC, useState } from "react";
import * as NavItem from "../NavItem/NavItem";
import Button, { HamburgerBtn } from "../Button";
import Avatar from "../Avatar";

type toggleState = "expanded" | "collapsed";

const NavLinks: string[] = ["For you", "Tasks", "Marketplace", "Accounts", "Explore"];

const Navbar: FC<{}> = () => {
    const [expanded, setExpandItems] = useState<boolean>(false);

    const clickHandler = (toggle: toggleState) => {
        setExpandItems(toggle === "collapsed" ? true : false);
    };

    return (
        <>
            <div
                className={`navbar-collapse sm action-items ${
                    !expanded ? "collapsed" : "expanded"
                }`}
            >
                <ul className="navbar-nav reverse">
                    <NavItem.Item>
                        <Button>Schedule a call</Button>
                    </NavItem.Item>
                    <NavItem.Item>
                        <Avatar />
                    </NavItem.Item>
                </ul>
            </div>

            <HamburgerBtn
                className="navbar-toggler"
                clickHandlerFn={clickHandler}
                toggle={expanded ? "expanded" : "collapsed"}
            >
                &nbsp;
            </HamburgerBtn>

            <div className={`navbar-collapse md ${!expanded ? "collapsed" : "expanded"}`}>
                <ul className="navbar-nav">
                    {NavLinks.map((link) => (
                        <NavItem.Link>{link}</NavItem.Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
