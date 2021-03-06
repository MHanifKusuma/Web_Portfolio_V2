import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import ScrollSpyMenu from "@common/src/components/ScrollSpyMenu";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Icon } from "react-icons-kit";
import { androidMenu } from "react-icons-kit/ionicons/androidMenu";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import Logo from "@common/src/components/UIElements/Logo";
import Button from "@common/src/components/Button";
import Container from "@common/src/components/UI/Container";
import NavbarWrapper, { MenuArea, MobileMenu } from "./navbar.style";
import LogoImage from "@common/src/assets/image/agencyModern/logo.png";

const Navbar = () => {
  const Data = useStaticQuery(graphql`
    query {
      agencyModernJson {
        leftMenuItems {
          label
          path
          offset
        }
        rightMenuItems {
          label
          path
          offset
        }
        mobileMenuItems {
          label
          path
          offset
        }
      }
    }
  `);

  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollItems = [];

  Data.agencyModernJson.leftMenuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleHandleMenuClose = () => {
    setMobileMenu(false);
  };

  return (
    <NavbarWrapper className="agencyModern-navbar navbar">
      <Container>
        <Logo
          href="/agencymodern"
          logoSrc={LogoImage}
          title="Crypto Modern"
          className="main-logo"
        />
        {/* end of logo */}

        <MenuArea>
          <ScrollSpyMenu
            className="menu-items menu-left"
            menuItems={Data.agencyModernJson.leftMenuItems}
            offset={-84}
          />
          <ScrollSpyMenu
            className="menu-items menu-right"
            menuItems={Data.agencyModernJson.rightMenuItems}
            offset={-84}
          />
          {/* end of main menu */}

          <Button
            className="menubar"
            icon={
              mobileMenu ? (
                <Icon
                  style={{ color: "#02073E" }}
                  className="bar"
                  size={32}
                  icon={androidClose}
                />
              ) : (
                <Fade>
                  <Icon
                    style={{ color: "#02073E" }}
                    className="close"
                    icon={androidMenu}
                    size={32}
                  />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={handleMobileMenu}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${mobileMenu ? "active" : ""}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {Data.agencyModernJson.mobileMenuItems.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleHandleMenuClose}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
