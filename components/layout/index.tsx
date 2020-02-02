import React, { FunctionComponent } from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NextRouter } from "next/dist/client/router";
import About from "@components/about";

interface Props {
  router: NextRouter;
  children: React.ReactNode;
}

const spring = {
  type: "tween",
  damping: 20,
  stiffness: 100,
  when: "afterChildren"
};

const Container = styled.section`
  padding: 0 1.4rem;
  margin: 0 auto;
  ${up("tablet")} {
    width: 660px;
    padding: 0;
  }
`;

const Layout: FunctionComponent<Props> = ({ router, children }: Props) => (
  <Container>
    <motion.div
      transition={spring}
      key={router.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="page-transition-container"
    >
      {children}
    </motion.div>
    <About />
  </Container>
);

export default Layout;
