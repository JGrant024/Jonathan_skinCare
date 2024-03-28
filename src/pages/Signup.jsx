import { Form, useNavigate, useActionData } from "react-router-dom";
import supabase from "../SupabaseClient";
import "./Login.css";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const { data, error } = await supabase.auth.signUp({
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

  console.log(response);

  return !response ? (
    <div>
      <h2>Sign Up!</h2>
      <Form method="POST">
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

        <button type="submit">Sign Up! </button>
      </Form>
    </div>
  ) : (
    navigate("/profile")
  );
};

export default Signup;
