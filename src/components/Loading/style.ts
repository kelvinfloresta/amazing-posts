import styled from "styled-components";
import { ILoadingProps } from "./ILoading";

export const StyledLoading = styled.div<ILoadingProps>`
  transition: opacity 0.3s;
  opacity: ${(props) => (props.isLoading ? 1 : 0)};
`;
