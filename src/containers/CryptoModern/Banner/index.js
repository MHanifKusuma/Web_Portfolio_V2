import React from "react";
import Fade from "react-reveal/Fade";
import Text from "@common/src/components/Text";
import Image from "@common/src/components/Image";
import Button from "@common/src/components/Button";
import Heading from "@common/src/components/Heading";
import Container from "@common/src/components/UI/Container";
import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from "./banner.style";

import bannerImg from "@common/src/assets/image/cryptoModern/banner-bg.png";

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            <DiscountLabel>
              <Text className="discountAmount" content="25% Discount" />
              <Text
                className="discountText"
                content="on every first project "
              />
            </DiscountLabel>
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Welcome next level  cryptocurrency token with faster transfer"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna
          ipsum dolor sit amet consectetur."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="GET TOKEN" />
              <Button
                className="text"
                variant="textButton"
                title="WHITE PAPER"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade in delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
