import styled from "styled-components";
import { withChildAsFunction } from "components/withChildAsFunction";

export const PostActions = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 2rem;
  }
`;

export const FailedDeletePost = styled.span<{ hasError: boolean }>`
  margin-left: 1rem;
  color: ${(props) => props.theme.dangerColor};
  transition: opacity 0.3s;
  opacity: ${(props) => (props.hasError ? 1 : 0)};
`;

export const PostDetailContainer = withChildAsFunction(styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 3rem;
`);
