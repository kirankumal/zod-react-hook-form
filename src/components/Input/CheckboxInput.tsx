import { FC } from "react";
import { InputProps } from "@/components/Input/types";
import { useFormContext } from "react-hook-form";
import { InputErrorMessage } from "@/components/Input/InputErrorMessage";

export const CheckboxInput: FC<InputProps> = ({ label, name, errors }) => {
  const { register } = useFormContext();
  return (
    <div>
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <input type="checkbox" {...register(name)} />
        <InputErrorMessage name={name} errors={errors} />
      </div>
    </div>
  );
};
