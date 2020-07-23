import styled from "styled-components";

const Input = styled.input`
  line-height: 2.5rem;
  padding-left: 1.5rem;
  border: 0;
  border-bottom: solid 2px black;
  box-sizing: border-box;
  font-size: 1.1rem;
  color: #1d3451;
  transition: border-color 0.3s;
  appearance: none;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primaryColor};
  }

  ::placeholder {
    color: #737380;
    font-size: 0.9375rem;
    line-height: 1.125rem;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default Input;
