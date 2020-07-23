import React from "react";
import { IErrorProps } from "./IError";
import Button from "components/Button/Button";

export default function Error(props: IErrorProps) {
  return (
    <div>
      Ops, an error has occurred! click{" "}
      <Button onClick={props.retry}>here</Button> to try again
    </div>
  );
}
