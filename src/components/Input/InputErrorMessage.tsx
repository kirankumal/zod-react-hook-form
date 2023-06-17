import { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { InputErrorProps } from "@/components/Input/types";

export const InputErrorMessage: FC<InputErrorProps> = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="form__error">{message}</p>}
    />
  );
};
