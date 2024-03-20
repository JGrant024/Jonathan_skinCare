import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize the Supabase client
const supabaseUrl = "https://rsmqffyhvmotvqbeqyem.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const SupabaseClient = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example function to fetch data from Supabase
    const fetchData = async () => {
      try {
    
        let { data: retrievedData, error } = await supabase
          .from("your-table-name")
          .select("*");

        if (error) throw error;

        setData(retrievedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data found</p>}
    </div>
  );
};

export default SupabaseClient;
