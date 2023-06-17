import { z } from "zod";

export const EmployeeFormSchema = z.object({
  firstName: z.string().trim().nonempty({ message: "First Name is required" }),

  middleName: z.string().trim().optional(),

  lastName: z.string().trim().nonempty({ message: "Last Name is required" }),

  birthDate: z.date({
    required_error: "Date is required",
    invalid_type_error: "Format invalid",
  }),

  gender: z.string().trim().nonempty({ message: "Gender is required" }),

  phoneNumber: z
    .string()
    .trim()
    .nonempty({ message: "Phone Number is required" }),

  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email()
    .trim()
    .toLowerCase(),

  startAt: z.string().nonempty({ message: "Start Time is required" }).trim(),

  endAt: z.string().nonempty({ message: "End Time is required" }).trim(),

  jobPosition: z
    .string()
    .trim()
    .nonempty({ message: "Job Position is required" }),

  designation: z.object({
    value: z.string(),
    label: z.string(),
  }),

  teams: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .nonempty({ message: "Teams is required" }),

  billable: z.boolean().optional(),

  billableHours: z
    .number({
      required_error:
        "Billable Hours is required and must be a positive number",
    })
    .int()
    .min(0),
});

export type EmployeeFormType = z.infer<typeof EmployeeFormSchema>;
