import { EmployeeFormSchema } from "@/models/Employee";
import type { EmployeeFormType } from "@/models/Employee";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/Input/Input";

export const EmployeeForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<EmployeeFormType>({
    resolver: zodResolver(EmployeeFormSchema),
  });
  const onSubmit: SubmitHandler<EmployeeFormType> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Employee Form</h1>
      <Input
        type="text"
        label="First Name"
        placeholder="Enter your First Name"
        name="firstName"
        register={register}
        errors={errors}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
