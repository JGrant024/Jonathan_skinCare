import { useEffect, useState } from "react";
import supabase from "../SupabaseClient.jsx";

const UserProfilePage = () => {
  const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const fetchProfile = async () => {
//     const session = supabase.auth.session();
//     const user = session?.user;

//     if (user) {
//       const { data: profile, error } = await supabase
//         .from("profiles")
//         .select("*")
//         .eq("id", user.id)
//         .single();

//       if (error) {
//         alert(error.message);
//       } else {
//         setProfile(profile);
//       }
//     }
//   };

//   if (!profile) return <div>Look here  </div>;

  return (
    <div>
      <h1>Welcome, {profile?.firstName}!</h1>
      <p>Name: {profile?.lastName}</p>
 
    </div>
  );
};

export default UserProfilePage;
