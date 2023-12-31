import { FC } from "react";
import { InputProps } from "@/components/Input/types";
import { InputErrorMessage } from "@/components/Input/InputErrorMessage";
import { useFormContext } from "react-hook-form";

export const Input: FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  errors,
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={`form__input ${
            Object.prototype.hasOwnProperty.call(errors, name) &&
            "border-red-500"
          } `}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
