import { FC } from "react";
import { SelectProps } from "@/components/Input/types";
import { InputErrorMessage } from "@/components/Input/InputErrorMessage";
import { useFormContext } from "react-hook-form";

// Default Select Input Example
export const SelectInput: FC<SelectProps> = ({
  name,
  errors,
  label,
  options,
}) => {
  const { register } = useFormContext();
  return (
    <div>
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <select
          {...register(name)}
          className={`form__input ${
            Object.prototype.hasOwnProperty.call(errors, name) &&
            "border-red-500"
          } `}
        >
          <option value="">Choose {label}</option>
          {options.map((item, index) => (
            <option value={item.value} key={index}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
