// note it work as server function without put line below
"use server";

import useFetch_server from "@/components/custom-hooks/useFetch_server";

export default async function getUserInfoByEmail(email) {
  // console.log("000 000 getUserInfoByEmail");

  const { data } = await useFetch_server(
    "POST",
    "http://localhost:3000/api/findUserByEmail",
    {
      email,
    }
  );
  // console.log("DATA::::::", data);
  delete data?.password;
  return data;
}
