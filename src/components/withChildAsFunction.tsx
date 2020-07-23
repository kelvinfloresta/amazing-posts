import React, { ReactNode } from "react";

export function withChildAsFunction<P extends { children: () => ReactNode }>(
  Component: any
) {
  return ({ children, ...props }: P) => {
    return <Component {...props}>{children()}</Component>;
  };
}
