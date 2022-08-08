import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Container from 'src/components/Container';
import Button from 'src/components/Button';

const Components = () => {
  return (
    <ComponentsWrap>
      <Container>
        <ComponentsRow>
          <ComponentsLabel>Button</ComponentsLabel>
          <Button>Button</Button>
        </ComponentsRow>
      </Container>
    </ComponentsWrap>
  );
};

const ComponentsWrap = styled.div`
  padding: ${rem(30)} 0;
`;

const ComponentsRow = styled.div``;

const ComponentsLabel = styled.div`
  font-weight: 700;
  margin-bottom: ${rem(10)};
`;

export default Components;
