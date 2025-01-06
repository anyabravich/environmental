import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerBox>{children}</ContainerBox>;
};

const ContainerBox = styled.div`
  max-width: ${rem(1232)};
  padding: 0 ${rem(30)};
  margin: 0 auto;
  box-sizing: content-box;
`;

export default Container;
