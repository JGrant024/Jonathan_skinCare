import { Form } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

export async function action({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const LoginData = { username, password };

  try {
    const url = `${import.meta.env.VITE_SOURCE_URL}/Login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(LoginData),
    });
    console.log(response);
    const statusCode = response.status;
    const data = await response.json();

    const { access_token } = data;

    localStorage.clear();
    localStorage.setItem("access-token", access_token);
    return statusCode === 200 ? true : false;
  } catch (error) {
    console.error("ERROR:", error);
  }
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
