import { useAuth } from "../AuthContext";

const UserProfilePage = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  if (!user) {
    return <div>You have succesfully logged out</div>;
  }

  return (
    <div>
      <h1>Welcome Back! </h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfilePage;
