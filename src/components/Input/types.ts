import { EmployeeFormType } from "@/models/Employee";
import type { UserFormWithAddress } from "@/models/User";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

// export enum UserFieldName {
//   Name = "name",
//   Username = "username",
//   Email = "email",
//   Phone = "phone",
//   Website = "website",
//   Company = "company",
//   Address = "address",
//   CompanyName = "company.name",
//   CompanyCatchPhrase = "company.catchPhrase",
//   AddressStreet = "address.street",
//   AddressSuite = "address.suite",
//   AddressCity = "address.city",
//   AddressZipcode = "address.zipcode",
// }
// export enum EmployeeFieldName {
//   FirstName = "firstName",
//   MiddleName = "middleName",
//   LastName = "lastName",
//   BirthDate = "birthDate",
//   Gender = "gender",
//   PhoneNumber = "phoneNumber",
//   Email = "email",
//   StartAt = "startAt",
//   EndAt = "endAt",
//   JobPosition = "jobPosition",
//   Teams = "teams",
//   Designation = "designation",
//   Billable = "billable",
//   BillableHours = "billableHours",
// }
export interface InputErrorProps {
  // name: UserFieldName | EmployeeFieldName;
  name:
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
    | "address.zipcode"
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
  errors: FieldErrors<UserFormWithAddress | EmployeeFormType>;
}

export interface InputProps extends InputErrorProps {
  label: string;
  type: "text" | "email";
  placeholder: string;
  register: UseFormRegister<UserFormWithAddress | EmployeeFormType>;
}
