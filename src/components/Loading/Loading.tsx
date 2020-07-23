import React from "react";
import { ILoadingProps } from "./ILoading";
import { StyledLoading } from "./style";

export default function Loading({ isLoading }: ILoadingProps) {
  return <StyledLoading isLoading={isLoading}>Loading...</StyledLoading>;
}
