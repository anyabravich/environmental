import React from 'react';
import Container from 'src/components/Container';
import styled from 'styled-components';
import { rem } from 'polished';

const Contacts = () => {
  return (
    <ContactsWrap>
      <Container>Contacts</Container>
    </ContactsWrap>
  );
};

const ContactsWrap = styled.div`
  padding: ${rem(30)} 0;
`;

export default Contacts;
