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
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={`outline-none w-full  text-gray-500 border-2 rounded-md px-4 py-2 duration-200 focus:border-blue-600  ${
            errors.hasOwnProperty(`${name}`) && "border-red-500"
          } `}
        />
      </div>
      <InputErrorMessage name={name} errors={errors} />
    </div>
  );
};
