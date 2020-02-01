import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 65px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Component = () => {
  return (
    <Header>
      <Logo>
        <Img src="/logo.svg" alt="Logo sephi.dev" title="sephi.dev" />
      </Logo>
      <Title>sephi.dev</Title>
    </Header>
  );
};

export default Component;
