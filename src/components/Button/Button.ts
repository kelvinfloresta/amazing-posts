import styled from "styled-components";
import { IButtonProps } from "./IButton";

const Button = styled.button<IButtonProps>`
  color: white;
  line-height: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  transition: opacity 0.3s;
  background-color: ${(props) => {
    if (props.themed === "danger") {
      return props.theme.dangerColor;
    }
    return props.theme.primaryColor;
  }};

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
