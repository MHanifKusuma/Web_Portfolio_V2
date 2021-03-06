import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Text from "@common/src/components/Text";
import Image from "@common/src/components/Image";
import CustomerWrapper, { ImageWrapper } from "./customer.style";

const Customer = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  const { client } = data.appClassicJson;

  return (
    <CustomerWrapper>
      <Text content="Trusted by companies like:" />
      <ImageWrapper>
        {client.map((item) => (
          <Image
            key={`client-key${item.id}`}
            src={item.image.publicURL}
            alt={item.title}
          />
        ))}
      </ImageWrapper>
    </CustomerWrapper>
  );
};

export default Customer;
