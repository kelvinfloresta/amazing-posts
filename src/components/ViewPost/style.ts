import styled from "styled-components";

export const PostTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.688rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.textColor1};
`;

export const PostDescription = styled.p`
  margin: 0;
  color: ${(props) => props.theme.textColor2};
`;
