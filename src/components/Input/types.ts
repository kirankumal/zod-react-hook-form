import { EmployeeFormType } from "@/models/Employee";
import type { UserFormWithAddress } from "@/models/User";
import { FieldErrors } from "react-hook-form";

type UserFieldName =
  | "name"
  | "username"
  | "email"
  | "phone"
  | "website"
  | "company"
  | "address"
  | "company.name"
  | "company.catchPhrase"
  | "address.street"
  | "address.suite"
  | "address.city"
  | "address.zipcode";

type EmployeeFieldName =
  | "firstName"
  | "middleName"
  | "lastName"
  | "birthDate"
  | "gender"
  | "phoneNumber"
  | "email"
  | "startAt"
  | "endAt"
  | "jobPosition"
  | "teams"
  | "designation"
  | "billable"
  | "billableHours";
export interface InputErrorProps {
  name: UserFieldName | EmployeeFieldName;
  errors: FieldErrors<UserFormWithAddress | EmployeeFormType>;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type?: "text" | "email" | "time";
  placeholder?: string;
}

export interface SelectProps extends InputProps {
  options: {
    value: string;
    label: string;
  }[];
}

export interface ReactSelectProps extends SelectProps {
  isMulti: boolean;
}
