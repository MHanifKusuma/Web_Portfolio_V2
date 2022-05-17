import React from "react";
import { SocialProfileWrapper, SocialProfileItem } from "./socialProfile.style";
import { graphql, useStaticQuery } from "gatsby";
import { instagram } from "react-icons-kit/fa/instagram";
import { twitter } from "react-icons-kit/fa/twitter";
import { linkedin } from "react-icons-kit/fa/linkedin";
import Icon from "react-icons-kit";

export const query = graphql`
  {
    allContentfulSocialMediaLinks {
      nodes {
        title
        link
        icon
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
      {/* {socmeds.map((socmed, index) => (
        <SocialProfileItem
          key={`social-item-${index}`}
          className="social_profile_item"
        >
          <a href={socmed.link || "#"} aria-label="social icon">
            <Icon icon={socmed.icon} />
          </a>
        </SocialProfileItem>
      ))} */}

      <SocialProfileItem className="social_profile_item">
        <a
          href="https://www.linkedin.com/in/mhanifkusuma/"
          aria-label="social icon"
        >
          <Icon icon={linkedin} size={25} />
        </a>
      </SocialProfileItem>
      <SocialProfileItem className="social_profile_item">
        <a href="https://www.instagram.com/hanif.ksm/" aria-label="social icon">
          <Icon icon={instagram} size={25} />
        </a>
      </SocialProfileItem>
    </SocialProfileWrapper>
  );
};

export default SocialProfile;
