import React from 'react';
import Container from 'src/components/Container';
import styled from 'styled-components';
import { rem } from 'polished';

const About = () => {
  return (
    <AboutWrap>
      <Container>About</Container>
    </AboutWrap>
  );
};

const AboutWrap = styled.div`
  padding: ${rem(30)} 0;
`;

export default About;
