import { type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams.get("item"));
  return new Response(searchParams.get("item"));
}
