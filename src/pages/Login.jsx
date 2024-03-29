import { Form, Link, useNavigate, useActionData } from "react-router-dom";
import supabase from "../SupabaseClient";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (data && !error) {
    return true;
  } else {
    return false;
  }
}

const Login = () => {
  const navigate = useNavigate();
  const response = useActionData();

  if (response) {
    navigate("/profile");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Form method="POST" className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              minLength="8"
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <div className="text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600">
              Sign Up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
