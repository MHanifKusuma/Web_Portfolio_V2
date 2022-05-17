import styled from "styled-components";
import { themeGet } from "styled-system";

const BannerWrapper = styled.section`
  position: relative;
  background-color: ${themeGet("colors.customPrimary")};
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }

  .signature_arrow {
    color: ${themeGet("colors.customLight")};
    display: inline-block;
  }
`;

export default BannerWrapper;
