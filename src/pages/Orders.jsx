import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  const url = "https://rsmqffyhvmotvqbeqyem.supabase.co";
  const data = await fetch(url).then((response) => response.json());

  return { data };
}

const Orders = () => {
  const { data } = useLoaderData();
  return (
    <>
      <h2>Order Confirmed!</h2>
      <ul>
        {data.map((orders, index) => {
          <li key={index}>
            <Link to={orders}></Link>
          </li>;
        })}
      </ul>
    </>
  );
};

export default Orders;
