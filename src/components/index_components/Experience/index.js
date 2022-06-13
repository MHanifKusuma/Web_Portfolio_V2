import React from "react";
import Fade from "react-reveal/Fade";
import { useStaticQuery, graphql } from "gatsby";
import Heading from "@common/src/components/Heading";
import Container from "@common/src/components/UI/Container";
import { SectionHeader } from "../../styles/interior.style";
import SectionWrapper, { BlogPost, ExperienceWrapper } from "./feature.style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Experience = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulMyExperience(sort: { order: DESC, fields: title }) {
        nodes {
          title
          description
          icon {
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
  `);

  const {
    allContentfulMyExperience: { nodes: experiences },
  } = data;

  return (
    <SectionWrapper id="experience">
      <Fade bottom>
        <SectionHeader>
          <Heading content={`My Experiences`} />
        </SectionHeader>
      </Fade>
      <Container width="1360px">
        <Fade bottom delay={30}>
          <ExperienceWrapper>
            {experiences.map((exp, index) => (
              <BlogPost key={`experience_${index}`} className={`blog_post`}>
                <div className={`thumbnail`}>
                  <GatsbyImage
                    image={getImage(exp.icon)}
                    className="exp_icon"
                  />
                </div>
                <div className="content">
                  <h3 className="title">{exp.title}</h3>
                  <p className="excerpt">{exp.description}</p>
                </div>
              </BlogPost>
            ))}
          </ExperienceWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Experience;
