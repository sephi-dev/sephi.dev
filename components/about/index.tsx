import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

const Container = styled.div`
  border-top: 1px solid #bbb;
  margin: 2.4rem 0 0;
  padding: 1.4rem 0 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  ${up("tablet")} {
    flex-direction: row;
  }
`;
const Text = styled.p`
  font-style: italic;
  font-size: 14px;
  line-height: 1.4;
  ${up("tablet")} {
    margin-left: 1.4rem;
  }
`;
const Img = styled.img`
  width: 44px;
`;

// add link
const About: FunctionComponent = () => (
  <Container>
    <Img src="/logo.svg" />
    <Text>
      Je m&apos;appelle David, Développeur Front, ex-intervenant à @Hetic &
      @EEMI en intégration, JavaScript et React. Aujourd&apos;hui je vis de ma
      passion en continuant de développer l&apos;activité de @Hostnfly dans une
      super équipe. Papa est mon premier métier.
    </Text>
  </Container>
);

export default About;
