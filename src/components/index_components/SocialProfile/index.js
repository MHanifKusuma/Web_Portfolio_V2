import React from "react";
import { SocialProfileWrapper, SocialProfileItem } from "./socialProfile.style";
import { graphql, useStaticQuery } from "gatsby";
import { instagram } from "react-icons-kit/fa/instagram";
import { linkedin } from "react-icons-kit/fa/linkedin";
import Icon from "react-icons-kit";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  {
    allContentfulSocialMediaLinks {
      nodes {
        title
        link
        icon {
          gatsbyImageData(quality: 100)
        }
      }
    }
  }
`;

const SocialProfile = ({ items, className }) => {
  const addAllClasses = ["social_profiles"];

  if (className) {
    addAllClasses.push(className);
  }

  const {
    allContentfulSocialMediaLinks: { nodes: socmeds },
  } = useStaticQuery(query);
  console.log(socmeds);

  return (
    <SocialProfileWrapper className={addAllClasses.join(" ")}>
      {socmeds.map((socmed, index) => (
        <SocialProfileItem
          key={`social-item-${index}`}
          className="social_profile_item"
        >
          <a href={socmed.link || "#"} aria-label="social icon">
            <GatsbyImage image={getImage(socmed.icon)} />
          </a>
        </SocialProfileItem>
      ))}
    </SocialProfileWrapper>
  );
};

export default SocialProfile;
