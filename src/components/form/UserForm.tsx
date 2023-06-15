import { UserFormSchemaWithAddress } from "@/models/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import type { UserFormWithAddress } from "@/models/User";
import { Input } from "@/components/Input/Input";

export const UserForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserFormWithAddress>({
    resolver: zodResolver(UserFormSchemaWithAddress),
  });

  const onSubmit: SubmitHandler<UserFormWithAddress> = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="shadow-md rounded-md flex flex-col">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 flex flex-col gap-y-5 "
        >
          <Input
            type="text"
            label="Name"
            placeholder="Enter your Name"
            name="name"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="UserName"
            placeholder="Enter your Username"
            name="username"
            register={register}
            errors={errors}
          />
          <Input
            type="email"
            label="Email"
            placeholder="Enter your Email"
            name="email"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="Phone Number"
            placeholder="Enter your phonenumber"
            name="phone"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="Website"
            placeholder="Enter your Company website"
            name="website"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="City"
            placeholder="Enter your City"
            name="address.city"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="Street"
            placeholder="Enter your Street"
            name="address.street"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="Suite"
            placeholder="Enter your Suite"
            name="address.suite"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="ZipCode"
            placeholder="Enter your zipcode"
            name="address.zipcode"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="Company Name"
            placeholder="Enter your Company Name"
            name="company.name"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            label="Company Catch Phrase"
            placeholder="Enter your Company Catch Phrase"
            name="company.catchPhrase"
            register={register}
            errors={errors}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
