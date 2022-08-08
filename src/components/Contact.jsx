import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Contact = ({ icon = '', isLink = true, link = '', text = '' }) => {
  return (
    <ContactWrap>
      <ContactIcon icon={icon} />
      {isLink ? <ContainLink href={link}>{text}</ContainLink> : <ContactText>{text}</ContactText>}
    </ContactWrap>
  );
};

const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(16)};
`;

const ContactIcon = styled.div`
  width: ${rem(24)};
  height: ${rem(24)};
  background: url(${(props) => `images/icon-${props.icon}.svg`}) no-repeat center center;
`;

const contactItemStylesText = css`
  font-weight: 400;
  font-size: ${rem(16)};
  color: ${(props) => props.theme.colors.text.body.default};
`;

const ContainLink = styled.a`
  ${contactItemStylesText}
`;

const ContactText = styled.div`
  ${contactItemStylesText}
`;

export default Contact;
