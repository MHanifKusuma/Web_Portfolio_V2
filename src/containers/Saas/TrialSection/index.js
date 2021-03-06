import React from "react";
import PropTypes from "prop-types";
import Box from "@common/src/components/Box";
import Text from "@common/src/components/Text";
import Heading from "@common/src/components/Heading";
import Button from "@common/src/components/Button";
import Image from "@common/src/components/Image";
import Container from "@common/src/components/UI/Container";

import { ButtonGroup } from "../saas.style";

import VendorLogos from "@common/src/assets/image/saas/vendor-logos.png";

const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Image {...ImageOne} src={VendorLogos} alt="VendorLogos" />
          </Box>
          <Box {...textArea}>
            <Heading
              {...title}
              content="Start your 30 days free trials today!"
            />
            <Text
              {...description}
              content="We have provided 30 Days Money Back Guarantee in case of dissatisfaction with our product. We care for our customers and their values."
            />
            <ButtonGroup className="button_group">
              <Button title="WORK HISTORY" {...btnStyle} />
              <Button
                title="Login with Email"
                variant="textButton"
                {...outlineBtnStyle}
              />
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

TrialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: "section",
    className: "trial-section",
    pt: ["20px", "40px", "60px", "80px"],
    pb: ["0px", "0px", "0px", "80px"],
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  textArea: {
    width: ["100%", "100%", "80%", "43%"],
  },
  imageArea: {
    width: ["100%", "100%", "43%"],
    mb: ["35px", "35px", "40px", "40px"],
  },
  title: {
    fontSize: ["32px", "32px", "36px", "42px", "48px"],
    fontWeight: "400",
    color: "headingColor",
    letterSpacing: "-0.025em",
    mb: "28px",
    textAlign: "center",
    lineHeight: "1.25",
  },
  description: {
    fontSize: ["15px", "15px", "16px", "16px", "16px"],
    color: "textColor",
    lineHeight: "2.1",
    textAlign: "center",
    mb: ["35px", "35px", "40px", "60px"],
  },
  ImageOne: {
    ml: "auto",
    mr: "auto",
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    colors: "primaryWithBg",
  },
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#0f2137",
  },
};

export default TrialSection;
