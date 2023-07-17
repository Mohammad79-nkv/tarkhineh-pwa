import HomePage from "@/components/home/Home";
export default async function Page() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos`, { method: "GET" });
  console.log(data)

  return <HomePage />;
}
