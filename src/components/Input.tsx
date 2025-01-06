import styled from "styled-components";
import { rem } from "polished";

interface IInput {
  children: React.ReactNode;
  type: string;
  placeholder: string;
}

const Input = ({ children, type, placeholder }: IInput) => {
  return (
    <InputLabel>
      {children}
      <InputForm type={type} placeholder={placeholder} />
    </InputLabel>
  );
};

const InputLabel = styled.label`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: 200%;
  color: ${(props) => props.theme.colors.text.body.default};
`;

const InputForm = styled.input`
  display: block;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border: ${rem(1)} solid ${(props) => props.theme.colors.grey};
  border-radius: ${(props) => rem(props.theme.radius.input)};
  padding: ${rem(14)} ${rem(16)};
  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }
`;

export default Input;
