import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import NavbarWrapper from "@common/src/components/Navbar";
import Drawer from "@common/src/components/Drawer";
import Button from "@common/src/components/Button";
import Logo from "@common/src/components/UIElements/Logo";
import Box from "@common/src/components/Box";
import HamburgMenu from "@common/src/components/HamburgMenu";
import Container from "@common/src/components/UI/Container";
import { DrawerContext } from "@common/src/contexts/DrawerContext";
import ScrollSpyMenu from "@common/src/components/ScrollSpyMenu";

import LogoImage from "@common/src/assets/image/saasModern/logo-white.png";
import LogoImageAlt from "@common/src/assets/image/saasModern/logo.png";

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  const Data = useStaticQuery(graphql`
    query {
      cryptoJson {
        MENU_ITEMS {
          label
          path
          offset
        }
      }
    }
  `);

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          <Logo
            href="/crypto"
            logoSrc={LogoImage}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="/crypto"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={Data.cryptoJson.MENU_ITEMS}
              offset={-70}
            />

            <Link className="navbar_button" to="/crypto">
              <Button {...button} title="GET STARTED" />
            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={Data.cryptoJson.MENU_ITEMS}
                drawerClose={true}
                offset={-100}
              />

              <Link className="navbar_drawer_button" to="/crypto">
                <Button {...button} title="GET STARTED" />
              </Link>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: "70px",
    display: "block",
  },
  row: {
    flexBox: true,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logoStyle: {
    maxWidth: ["120px", "130px"],
  },
  button: {
    type: "button",
    fontSize: "13px",
    fontWeight: "700",
    borderRadius: "4px",
    pl: "15px",
    pr: "15px",
    colors: "secondaryWithBg",
    minHeight: "auto",
    height: "40px",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default Navbar;
