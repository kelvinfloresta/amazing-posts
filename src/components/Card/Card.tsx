import styled from "styled-components";

interface IProps {
  height?: string;
}

const Card = styled.div<IProps>`
  height: ${(props) => props.height && props.height};
  border: solid 1px #d5d5d5;
  border-radius: 8px;
  width: 260px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, background-color 0.3s, transform 0.15s;
  padding: 0.5rem 1rem;
  cursor: ${(props) => props.onClick && "pointer"};
  user-select: ${(props) => props.onClick && "none"};

  &:hover {
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    transform: ${(props) => props.onClick && "translateY(-2px)"};
  }

  &:active {
    transform: ${(props) => props.onClick && "translateY(2px)"};
  }
`;

export default Card;
