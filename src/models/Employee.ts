import { z } from "zod";

export const EmployeeFormSchema = z.object({
  firstName: z.string().trim().nonempty({ message: "First Name is required" }),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().nonempty({ message: "Last Name is required" }),
  // birthDate: z
  //   .string({ required_error: "Date Time is required" })
  //   .datetime({ message: "Invalid datetime string! Must be UTC" }),
  // gender: z.string({ required_error: "Gender is required" }).trim(),
  // phoneNumber: z.string({ required_error: "Phone Number is required" }).trim(),
  // email: z
  //   .string({ required_error: "Email address is required" })
  //   .email()
  //   .trim()
  //   .toLowerCase(),
  // startAt: z
  //   .string({ required_error: "Start Time is required" })
  //   .datetime()
  //   .trim(),
  // endAt: z.string({ required_error: "End Time is required" }).datetime().trim(),
  // jobPosition: z.string({ required_error: "Job Position is required" }).trim(),
  // teams: z.string().trim().optional(),
  // designation: z.string({ required_error: "Designation is required" }).trim(),
  // billable: z.boolean().optional(),
  // billableHours: z
  //   .string({ required_error: "Billable hours is required" })
  //   .trim(),
});

export type EmployeeFormType = z.infer<typeof EmployeeFormSchema>;
