"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../basic-items/Button";
import useFetch_server from "../custom-hooks/useFetch_server";

export default function EditTaskForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [loading, setLoading] = useState();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { data } = await useFetch_server(
      "PUT",
      `http://localhost:3000/api/posts/${id}`,
      {
        newTitle,
        newDescription,
      }
    );
    setLoading(false);

    if (data) {
      router.push("/");
      router.refresh();
    } else {
      alert("Wrong...");
    }
  };

  return (
    <div className=" max-w-[600px] mx-auto mt-10 px-4">
      <h1>Update post</h1>
      <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="basic-input"
          type="text"
          placeholder="Task Title"
        />

        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          className="basic-input"
          type="text"
          placeholder="Task Description"
        />

        <Button loading={loading} main={true}>
          Update Task
        </Button>
      </form>
    </div>
  );
}
