import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { mediaRecordOutline } from "react-icons-kit/typicons/mediaRecordOutline";
import { plus } from "react-icons-kit/typicons/plus";
import { starOutline } from "react-icons-kit/typicons/starOutline";
import Text from "@common/src/components/Text";
import Image from "@common/src/components/Image";
import Heading from "@common/src/components/Heading";
import Tab, { Panel } from "@common/src/components/Tabs";
import Container from "@common/src/components/UI/Container";
import FeatureBlock from "@common/src/components/FeatureBlock";
import { SectionHeader } from "../appClassic.style";
import SectionWrapper, { TabArea } from "./featureTab.style";

const FeatureTab = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        featuresTab {
          slogan
          title
          tab {
            id
            color
            icon {
              publicURL
            }
            title
            description
            image {
              publicURL
            }
          }
        }
      }
    }
  `);
  const { slogan, title, tab } = data.appClassicJson.featuresTab;

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        <Fade up delay={100}>
          <TabArea>
            <Tab active={0}>
              {tab.map((item) => (
                <Panel
                  title={
                    <FeatureBlock
                      style={{ "--color": `${item.color}` }}
                      iconPosition="left"
                      icon={
                        <Fragment>
                          <Icon className="plus" icon={plus} />
                          <Icon className="circle" icon={mediaRecordOutline} />
                          <Image src={item.icon.publicURL} alt={item.title} />
                          <Icon className="star" icon={starOutline} />
                        </Fragment>
                      }
                      title={<Heading as="h3" content={item.title} />}
                      description={<Text content={item.description} />}
                    />
                  }
                  key={`app-tab--key${item.id}`}
                >
                  <Fade>
                    <Image src={item.image.publicURL} alt={item.title} />
                  </Fade>
                </Panel>
              ))}
            </Tab>
          </TabArea>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureTab;
