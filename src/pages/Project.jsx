import React from 'react';
import Container from 'src/components/Container';
import styled from 'styled-components';
import { rem } from 'polished';

const Project = () => {
  return (
    <ProjectWrap>
      <Container>Project</Container>
    </ProjectWrap>
  );
};

const ProjectWrap = styled.div`
  padding: ${rem(30)} 0;
`;

export default Project;
