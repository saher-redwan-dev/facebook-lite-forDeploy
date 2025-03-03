// note it work as server function without put line below
"use server";

import fetchData from "@/components/custom-hooks/fetchData";

export default async function getUserInfoByEmail(email) {
  // console.log("000 000 getUserInfoByEmail");

  const { data } = await fetchData(
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
