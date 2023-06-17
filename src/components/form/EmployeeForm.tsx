import { EmployeeFormSchema } from "@/models/Employee";
import type { EmployeeFormType } from "@/models/Employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import "@/components/Input/input.scss";
import {
  Input,
  NumberInput,
  DateInput,
  SelectInput,
  ReactSelectInput,
  CheckboxInput,
  SubmitInput,
} from "@/components/Input/index";

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

  const genderOptions = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];
  const designationOptions = [
    {
      value: "software",
      label: "Software",
    },
    {
      value: "devops",
      label: "Devops",
    },
  ];
  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="form">
        <h1 className="form__title">Employee Form</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4">
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
              <DateInput
                label="Birth Date"
                name="birthDate"
                errors={errors}
                placeholder="Enter your DOB"
              />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                name="email"
                errors={errors}
              />
              <Input
                type="text"
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phoneNumber"
                errors={errors}
              />
              <SelectInput
                name="gender"
                label="Select Gender"
                errors={errors}
                options={genderOptions}
              />
              <Input
                type="time"
                label="Start Time"
                name="startAt"
                errors={errors}
                placeholder="Enter the start time"
              />
              <Input
                type="time"
                label="End Time"
                name="endAt"
                errors={errors}
                placeholder="Enter the start time"
              />
              <Input
                type="text"
                label="Job Position"
                name="jobPosition"
                errors={errors}
                placeholder="Enter the job position"
              />
              <ReactSelectInput
                isMulti={true}
                name="teams"
                label="Select Teams"
                errors={errors}
                options={designationOptions}
              />
              <ReactSelectInput
                isMulti={false}
                name="designation"
                label="Select Designation"
                errors={errors}
                options={designationOptions}
              />
              <NumberInput
                label="Billable Hours"
                placeholder="Enter the billable hours"
                name="billableHours"
                errors={errors}
              />
              <CheckboxInput
                label="Is Billable"
                name="billable"
                errors={errors}
              />
            </div>
            <div className="flex justify-center">
              <SubmitInput />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
