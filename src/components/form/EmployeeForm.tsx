import { EmployeeFormSchema } from "@/models/Employee";
import type { EmployeeFormType } from "@/models/Employee";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/Input/Input";

export const EmployeeForm: FC = () => {
  const methods = useForm<EmployeeFormType>({
    resolver: zodResolver(EmployeeFormSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<EmployeeFormType> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Employee Form</h1>
        <Input
          type="text"
          label="First Name"
          placeholder="Enter your First Name"
          name="firstName"
          errors={errors}
        />
        <Input
          type="text"
          label="Middle Name"
          placeholder="Enter your Middle Name"
          name="middleName"
          errors={errors}
        />
        <Input
          type="text"
          label="Last Name"
          placeholder="Enter your Last Name"
          name="lastName"
          errors={errors}
        />

        <input type="submit" value="Submit" />
      </form>
    </FormProvider>
  );
};
