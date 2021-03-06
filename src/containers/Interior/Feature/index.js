import React from "react";
import Fade from "react-reveal/Fade";
import { useStaticQuery, graphql } from "gatsby";
import Heading from "@common/src/components/Heading";
import BlogPost from "@common/src/components/BlogPost";
import Container from "@common/src/components/UI/Container";
import { SectionHeader } from "../interior.style";
import SectionWrapper, { FeatureWrapper } from "./feature.style";

const Feature = () => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        featureData {
          title
          slogan
          features {
            id
            icon {
              publicURL
            }
            title
            description
          }
        }
      }
    }
  `);

  const { title, slogan, features } = data.interiorJson.featureData;

  return (
    <SectionWrapper id="feature">
      <Fade bottom>
        <SectionHeader>
          <Heading as="h5" content={title} />
          <Heading content={slogan} />
        </SectionHeader>
      </Fade>
      <Container width="1360px">
        <Fade bottom delay={30}>
          <FeatureWrapper>
            {features.map((item) => (
              <BlogPost
                key={`feature_key${item.id}`}
                thumbUrl={item.icon.publicURL}
                title={item.title}
                excerpt={item.description}
              />
            ))}
          </FeatureWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Feature;
