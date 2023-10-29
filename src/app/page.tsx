import HomePage from "@/components/home/Home";
import { useSession } from "next-auth/react";
export default async function Page() {
  
  return <HomePage />;
}
