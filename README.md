This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure

<Navbar>
    <NavbarItem lg={order:1} left>
        <Brand />
    <NavbarItem/>
    <Collapse isOpen={!collapsed} >
        <Nav>
            <NavItem>
                <NavLink href="">For you</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="">Tasks</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="">Marketplace</NavLink>
            </NavItem>
        </Nav>
    </Collapse>
    <Nav lg={order:2}>
        <NavItem>
            <NavLink href="">For you</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="">Tasks</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="">Marketplace</NavLink>
        </NavItem>
    </Nav>
    <Nav right lg={order:3}>
        <NavItem>
            <Avatar />
        </NavItem>
        <NavItem>
            <Schedule />
        </NavItem>
    </Nav>
    <!-- Can we remove NavItem with Toggler, Not required Dugh -->
    <NavItem>
        <NavbarToggler lg={order:3, visible} md={visible} sm={visible} icon={open: HamburgerIcon, close: CloseIcon}>
    </NavItem>
  </Navbar>
