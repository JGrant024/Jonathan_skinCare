import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import supabase from "../SupabaseClient";

import "./Login.css";

export async function action({ request }) {
  const formData = await request.formData();
  const firstName = formData.get("First Name");
  const lastName = formData.get("Last Name");
  const username = formData.get("username");
  const password = formData.get("password");
  const { data, error } = await supabase.auth.signUp({
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
  });
  console.log("Data", data);
  console.log("Error", error);
}
const Login = () => {
  console.log("VITE", import.meta.env.VITE_SOURCE_URL);
  return (
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
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" minLength="8" required />
        </div>
        <button type="submit">Sign Up! </button>
      </Form>
    </div>
  );
};

export default Login;
