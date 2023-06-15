import fetchUsers from "@/lib/fetchUser";
import { UserForm } from "@/components/form/UserForm";
import { EmployeeForm } from "./components/form/EmployeeForm";

fetchUsers();
function App() {
  return (
    <>
      <h1 className="">Hello world</h1>
      {/* <UserForm /> */}
      <EmployeeForm />
    </>
  );
}

export default App;
