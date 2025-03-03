"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/basic-items/Button";
import fetchData from "@/components/custom-hooks/fetchData";

import { useForm } from "react-hook-form";
import { optional, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "@/context/store";
import MainContainer from "@/components/basic-items/MainContainer";

export default function AddTask() {
  // const [loading, setLoading] = useState(false);
  // here an important note you can keek the loading useState because the submit button can be pressable for a little while (some ms), then send more inappropriate requests.

  const { user } = useGlobalContext();

  // console.log(user);

  const router = useRouter();
  const { data: session } = useSession();

  const schema = z.object({
    // email: z.string().email(),
    title: z.string().endsWith("."),
    description: z.string().min(4),
    //
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      // title: "title...",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    // setLoading(true)

    const { data: data_fetch } = await fetchData(
      "POST",
      "http://localhost:3000/api/posts",
      {
        title: data.title,
        description: data.description,
        //
        // likes: undefined,
        // comments: undefined,

        //
        likes: {
          users: [
            // {_id: "", name: "", img: ""}
          ],
        },
        comments: {
          comments: [
            // {text: "", user: {_id: "", name: "", img: ""}}
          ],
        },

        // publisher: session?.user?.name || session?.user?.email,
        // email: session?.user?.email,
        // image: null,
        // userImage: session?.user?.image || null,
        user: {
          email: session?.user?.email,
          image: session?.user?.image || null,
          publisher: session?.user?.name || session?.user?.email,
        },
      }
    );

    console.log("data_fetch:::", data_fetch);
    if (data_fetch) {
      router.push("/");
      router.refresh();
    } else {
      // alert("Wrong...");
      setError("root", {
        // for ex: (this usually for data comes from server)
        // message: "This email is already taken",
        message: "Error in server..., sorry",
      });
    }
    // setLoading(true);
  };

  return (
    <MainContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 mt-8"
      >
        <div className="italic uppercase ">Hi, {user?.name || user?.email}</div>

        <input
          {...register("title")}
          className="basic-input"
          type="text"
          placeholder="Task Title"
        />
        {errors.title && (
          <div className="text-red-500">{errors.title.message}</div>
        )}

        <input
          {...register("description")}
          className="basic-input"
          type="text"
          placeholder="Task Description"
        />
        {errors.description && (
          <div className="text-red-500">{errors.description.message}</div>
        )}

        <div className="border-t-2 pt-1">
          {errors.root && <b className="text-red-500">{errors.root.message}</b>}
        </div>
        <Button loading={isSubmitting}>Add Task</Button>
      </form>
    </MainContainer>
  );
}
