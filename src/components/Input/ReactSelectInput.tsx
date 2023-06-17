import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ReactSelectProps } from "@/components/Input/types";
import ReactSelect from "react-select";
import { InputErrorMessage } from "@/components/Input/InputErrorMessage";

// Select Input using React Select library
export const ReactSelectInput: FC<ReactSelectProps> = ({
  name,
  label,
  errors,
  options,
  isMulti,
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
          render={({ field: { onChange } }) => (
            <ReactSelect
              isMulti={isMulti}
              onChange={onChange}
              options={options}
              classNames={{
                control: (state) =>
                  `form__input py-[2.5px]  ${
                    Object.prototype.hasOwnProperty.call(errors, name) &&
                    !state.isFocused &&
                    "!border-2 !border-red-500"
                  } `,
              }}
            />
          )}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
