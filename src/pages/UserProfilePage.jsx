import { useEffect, useState } from "react";
import supabase from "../SupabaseClient.jsx";

const UserProfilePage = () => {
  const [profile, setProfile] = useState(null);

  return (
    <div>
      <h1>Welcome, {profile?.firstName}!</h1>
      <p>Name: {profile?.lastName}</p>
    </div>
  );
};

export default UserProfilePage;
