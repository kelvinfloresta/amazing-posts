import styled from "styled-components";
import { withChildAsFunction } from "components/withChildAsFunction";
import { phone, smallDesktop } from "device";

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

  @media (max-width: ${smallDesktop}) {
    grid-template-columns: repeat(2, max-content);
  }

  @media (max-width: ${phone}) {
    grid-template-columns: 1fr;
  }
`);
