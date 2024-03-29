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
    return (
      <div className="text-center mt-20 text-lg font-semibold">
        You have successfully logged out!
        <p>We hope to see you soon!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full max-w-md">
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">
          Welcome Back!
        </h1>
        <p className="text-md text-gray-600 mb-4">
          <strong className="text-center">Email:</strong> {user.email}
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfilePage;
