import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import supabase from "../SupabaseClient";

import "./Login.css";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const { data, error } = await supabase.auth.signInWithPassword({
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
      <h2>Login</h2>
      <Form method="POST" className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" minLength="8" required />
        </div>
        <button type="submit">Login</button>
        <Link to="/signup">Sign Up</Link>
      </Form>
    </div>
  );
};

export default Login;
