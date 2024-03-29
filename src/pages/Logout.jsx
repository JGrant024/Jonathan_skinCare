import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../SupabaseClient";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        navigate("/login");
      } else {
        // Handle error, maybe show a message to the user
        console.error("Logout failed:", error.message);
      }
    };

    logout();
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
      {/* You could add a loader here */}
    </div>
  );
};

export default Logout;
