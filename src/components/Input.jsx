import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Input = () => {
  return (
    <InputLabel>
      Your Email
      <InputForm type={'email'} placeholder={'Enter Your Email'} />
    </InputLabel>
  );
};

const InputLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: #808080;
`;

const InputForm = styled.input`
  display: block;
  width: 100%;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: ${rem(14)} ${rem(16)};
  &::placeholder {
    color: #cccccc;
  }
`;

export default Input;
