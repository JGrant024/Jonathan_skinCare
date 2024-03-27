import { Form, useNavigate, useActionData } from "react-router-dom";
import supabase from "../SupabaseClient";
import "./Login.css";

export async function action({ request }) {
  const formData = await request.formData();
  const firstName = formData.get("First Name");
  const lastName = formData.get("Last Name");
  const email = formData.get("email ");
  const password = formData.get("password");
  const { data, error } = await supabase.auth.signUp({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  console.log("Data", data);
  console.log("Error", error);

  if (data && !error) {
    return true;
  } else {
    return false;
  }
}
const Signup = () => {
  const navigate = useNavigate();
  const response = useActionData();

  console.log("VITE", import.meta.env.VITE_SOURCE_URL);

  return !response ? (
    <div>
      <h2>Sign Up!</h2>
      <Form method="POST" className="login-form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="firstName" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" minLength="8" required />
        </div>
        <br />
        <button type="submit">Sign Up! </button>
      </Form>
    </div>
  ) : (
    navigate("/profile")
  );
};

export default Signup;
