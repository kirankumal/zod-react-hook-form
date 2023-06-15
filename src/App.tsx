import fetchUsers from "@/lib/fetchUser";
import { UserForm } from "@/components/form/UserForm";

fetchUsers();
function App() {
  return (
    <>
      <h1 className="">Hello world</h1>
      <UserForm />
    </>
  );
}

export default App;
