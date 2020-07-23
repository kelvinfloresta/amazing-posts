import styled from "styled-components";
import { withChildAsFunction } from "components/withChildAsFunction";

export const ListPostContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledListPost = withChildAsFunction(styled.div`
  margin: 2rem auto;
  display: grid;
  grid-auto-columns: 1rem;
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  grid-template-columns: repeat(3, max-content);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, max-content);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`);
