import { createContext, useContext, useState, useEffect } from "react";
import supabase from "./SupabaseClient";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Define an async function to fetch the current session
    const fetchSession = async () => {
      const { data: session, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error getting current session:", error.message);
      } else {
        setUser(session?.user ?? null);
      }
    };

    // Call the async function
    fetchSession();

    // Set up the authentication state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );
  }, []);

  const value = {
    user,
    isAuth: !!user,
    login: async (email, password) => {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
    },
    logout: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
