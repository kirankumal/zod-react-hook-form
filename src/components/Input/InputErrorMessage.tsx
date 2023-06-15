import { ErrorMessage } from "@hookform/error-message";
import { FC } from "react";
import { InputErrorProps } from "./types";

export const InputErrorMessage: FC<InputErrorProps> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="text-red-500 py-1">{message}</p>}
    />
  );
};
