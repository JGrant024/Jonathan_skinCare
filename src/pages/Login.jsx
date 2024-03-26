import { Form, Link, useNavigate, useActionData } from "react-router-dom";
import supabase from "../SupabaseClient";

import "./Login.css";

export async function action({ request }) {
  console.log("ACTION???");
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log("Data", data);
  console.log("Error", error);

  if (data && !error) {
    return true;
    // navigate("/profile");
  } else {
    return false;
  }
}
const Login = () => {
  const navigate = useNavigate();
  const response = useActionData();
  console.log("USE LOADER DATA", response);

  return !response ? (
    <div>
      <h2>Login</h2>
      <Form method="POST" className="login-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="8"
            required
          />
        </div>
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
        <button type="button">
          <Link to="/signup">Sign Up</Link>
        </button>
      </Form>
    </div>
  ) : (
    navigate("/profile")
  );
};

export default Login;
