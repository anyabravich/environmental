import React, { useEffect, useState } from 'react';
import Container from './Container';
import styled from 'styled-components';
import { rem } from 'polished';
import { LogoWrap } from './Logo';
import { TextBodyWrap } from './TextBody';
import { H6Wrap } from './H6';
import Contact from './Contact';
import Input from './Input';
import Button from './Button';

const Footer = () => {
  const [contactItems, setContactItems] = useState([]);

  useEffect(() => {
    fetch('db/db.json')
      .then((response) => response.json())
      .then((json) => setContactItems(json['contactItems']));
  }, []);

  return (
    <FooterWrap>
      <Container>
        <FooterInner>
          <FooterItem>
            <FooterLogo to={'/'} img={'logo-footer'} />
            <FooterDescription>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Integer gravida vitae
              ultrices urna et porttitor malesuada.
            </FooterDescription>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Get in Touch</FooterTitle>
            {contactItems.map(({ icon, isLink, link, text }, index) => (
              <ContactItem key={index}>
                <Contact icon={icon} isLink={isLink} link={link} text={text} />
              </ContactItem>
            ))}
          </FooterItem>
          <FooterItem>
            <FooterTitle>Recent Post</FooterTitle>
            <FooterResentPost>
              <FooterResentIcon />
              <FooterResentTitle>
                The EU needs to hold the financial sector in global deforestation
              </FooterResentTitle>
            </FooterResentPost>
            <FooterResentPost>
              <FooterResentIcon />
              <FooterResentTitle>
                The EU needs to hold the financial sector in global deforestation
              </FooterResentTitle>
            </FooterResentPost>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Join a Newsletter</FooterTitle>
            <FooterFormField>
              <Input children={'Your Email'} type={'email'} placeholder={'Enter Your Email'} />
            </FooterFormField>
            <Button full={true}>Subscribe</Button>
          </FooterItem>
        </FooterInner>
      </Container>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  padding: ${rem(80)} 0;
  background: ${(props) => props.theme.colors.secondary.soft.green};
`;

const FooterInner = styled.div`
  display: grid;
  gap: ${rem(52)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(250)}, 1fr));
`;

const FooterItem = styled.div``;

const FooterLogo = styled(LogoWrap)`
  margin-bottom: ${rem(24)};
`;

const FooterDescription = styled(TextBodyWrap)`
  color: ${(props) => props.theme.colors.text.body.default};
`;

const FooterTitle = styled(H6Wrap)`
  margin-bottom: ${rem(24)};
  color: ${(props) => props.theme.colors.text.title};
`;

const ContactItem = styled.div`
  margin-bottom: ${rem(24)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterResentPost = styled.div`
  display: flex;
  gap: ${rem(16)};
  margin-bottom: ${rem(24)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterResentIcon = styled.div`
  width: ${rem(48)};
  height: ${rem(48)};
  flex-shrink: 0;
  background: ${(props) => props.theme.colors.placeholder};
`;

const FooterResentTitle = styled(TextBodyWrap)`
  color: ${(props) => props.theme.colors.text.body.default};
`;

const FooterFormField = styled.div`
  margin-bottom: ${rem(16)};
`;

export default Footer;
