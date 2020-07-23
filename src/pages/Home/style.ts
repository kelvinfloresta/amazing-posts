import styled from "styled-components";

export const HomeTitle = styled.h1`
  color: ${(props) => props.theme.textColor1};
  text-align: center;
  margin: 3rem 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100px;
`;
