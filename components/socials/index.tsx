import React, { FunctionComponent } from "react";
import styled from "styled-components";
import {
  SocialGithubCircular,
  SocialTwitterCircular
} from "styled-icons/typicons";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: auto;
`;
const Link = styled.a`
  color: #2b414d;
`;

const Component: FunctionComponent = () => (
  <Container>
    <Link href="https://github.com/davidvenin" target="_blank">
      <SocialGithubCircular
        size={34}
        title="contactez-moi sur Github"
        crossOrigin={true}
      />
    </Link>
    <Link href="https://twitter.com/sephiics" target="_blank">
      <SocialTwitterCircular
        size={34}
        title="Suivez-moi sur Twitter"
        crossOrigin={true}
      />
    </Link>
  </Container>
);

export default Component;
