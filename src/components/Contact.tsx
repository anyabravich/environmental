import styled, { css } from "styled-components";
import { rem } from "polished";

interface IContact {
  icon: string;
  isLink?: boolean;
  link?: string;
  text?: string;
}

const Contact = ({ icon, isLink, link, text }: IContact) => {
  return (
    <ContactWrap>
      <ContactIcon icon={icon} />
      {isLink ? (
        <ContainLink href={link}>{text}</ContainLink>
      ) : (
        <ContactText>{text}</ContactText>
      )}
    </ContactWrap>
  );
};

const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(16)};
`;

const ContactIcon = styled.div<{ icon: string }>`
  width: ${rem(24)};
  height: ${rem(24)};
  background: url(${(props) => `images/icon-${props.icon}.svg`}) no-repeat
    center center;
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
