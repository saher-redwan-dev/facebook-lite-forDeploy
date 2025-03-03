import Link from "next/link";
import { getServerSession } from "next-auth";
import SignOut from "./SignOut";
import fetchData from "../custom-hooks/fetchData";
import getUserInfoByEmail from "@/server-actions/getUserInfoByEmail";
import MenuNavSection from "./MenuNavSection";

// export const dynamic = 'force-dynamic'

export default async function RegistrationButtons() {
  const session = await getServerSession();

  // const userInfo = async () => {
  //   if (session?.user?.email) {
  //     const { data: info } = await fetchData(
  //       "POST",
  //       "http://localhost:3000/api/findUserByEmail",
  //       session?.user?.email
  //     );
  //     return info;
  //   }
  // };
  // let userInfo;
  let userInfo = await getUserInfoByEmail(session?.user?.email);

  // const res = await fetch("http://localhost:3000/api/findUserByEmail", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify({ email: session?.user?.email }),
  // });

  // if (res.ok) {
  //   let data = await res.json();
  //   userInfo = data;
  // }

  // console.log("session from regestrationBTN :::::");

  return (
    <>
      {session ? (
        <>
          {/* <Link href="/signout?callbackUrl=/">Logout</Link> */}
          {/* <Link href="/api/auth/signout?callbackUrl=/">Logout</Link> */}
          <div className="flex items-center justify-center gap-2">
            {/* <Link href={`/profile?_id=${userInfo._id}`}>
          <img src="" alt="" />

            </Link> */}

            <MenuNavSection />

            <Link
              // href={`/profile?id=${userInfo?._id}`}
              href={`/profile/${userInfo?._id}`}
              className="text-[#fdfdfd] tracking-wider p-1 px-2 rounded-[7px] flex select-none max-w-[185px]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, var(--primary-color) 15%, var(--dark-color))",
              }}
            >
              <small className="flex justify-center items-center gap-1">
                <b className="lines-with-dots">
                  {userInfo?.name || userInfo?.email}
                </b>
                {userInfo?.image && (
                  <img
                    // src={userInfo?.image}
                    src={userInfo?.image}
                    alt=""
                    className="w-[28px] h-[28px] select-none pointer-events-none object-cover rounded-[7px]"
                  />
                )}
              </small>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link
            href="/signin"
            className="text-[#fff] font-medium tracking-[1.5px]"
          >
            SignIn
          </Link>
          <Link
            href="/signup"
            className="text-[#fff] font-medium tracking-[1.5px]"
          >
            SignUp
          </Link>
        </>
      )}
    </>
  );
}
