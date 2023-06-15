import {
  BasicUserSchema,
  UserSchemaWithAddress,
  UserSchemaAddressWithGeo,
} from "@/models/User";
import { z } from "zod";

// const UserResults = z.array(BasicUserSchema);
// const UserResults = z.array(UserSchemaWithAddress);
const UserResults = z.array(UserSchemaAddressWithGeo);

type UserArray = z.infer<typeof UserResults>;

export default async function fetchUsers(): Promise<UserArray | undefined> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) return undefined;

    const userJson: UserArray = await res.json();

    const parseData = UserResults.parse(userJson);

    console.log(parseData);
    return parseData;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
