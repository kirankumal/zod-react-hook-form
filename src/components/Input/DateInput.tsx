import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import { InputProps } from "@/components/Input/types";
import { InputErrorMessage } from "@/components/Input/InputErrorMessage";
import "react-datepicker/dist/react-datepicker.css";

export const DateInput: FC<InputProps> = ({
  label,
  name,
  errors,
  placeholder,
}) => {
  const { control } = useFormContext();
  return (
    <div>
      <div>
        <label htmlFor={name} className="form__label">
          {label}
        </label>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              placeholderText={placeholder}
              onChange={onChange}
              selected={value}
              maxDate={new Date()}
              className={`form__input ${
                Object.prototype.hasOwnProperty.call(errors, name) &&
                "border-red-500"
              } `}
            />
          )}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
