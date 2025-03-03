"use server";

import fetchData from "@/components/custom-hooks/fetchData";

export default async function changeUserData(id, newData) {
  const { data: res } = await fetchData(
    "PUT",
    "http://localhost:3000/api/users",
    { id, ...newData }
  );

  // console.log("res:::::", res);

  // // console.log("cookies().get('user')", cookies());

  // try {
  //   const res = await fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(sentData),
  //   });

  //   if (res.ok) {
  //     data = await res.json();
  //   }
  // } catch (error) {
  //   // console.log("Error_POST: ", error);
  //   throw new Error("Error_POST");
  // }
}
