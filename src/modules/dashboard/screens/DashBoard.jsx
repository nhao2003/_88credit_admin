import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const { dashboard } = useLoaderData();
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
