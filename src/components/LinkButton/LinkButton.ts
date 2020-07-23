import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.primaryColor};
  transition: color 0.3s;

  &:hover {
    color: #23527c;
  }
`;

export default LinkButton;
