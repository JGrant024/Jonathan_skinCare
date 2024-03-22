import { useState } from "react";
import { Form } from "react-router-dom";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

 

  

    console.log("Username:", username);
    console.log("Password:", password);
    // Reset form fields after submission
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit} method="POST">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            minLength="8"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </Form>
    </div>
  );
  function Login() {
    return <Login />;
  }
};

export default Login;
