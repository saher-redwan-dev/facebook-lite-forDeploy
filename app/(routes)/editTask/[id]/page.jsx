import EditTaskForm from "@/components/posts-section/EditTaskForm";
import useFetch_server from "@/components/custom-hooks/useFetch_server";

const getTaskById = async (id) => {
  try {
    const { data } = await useFetch_server(
      "GET",
      `http://localhost:3000/api/posts/${id}`
    );

    if (data) {
      return data;
    }

    throw new Error("Failed to fetch Task");
  } catch (error) {
    // console.log(error);
  }
};

export default async function EditTask({ params }) {
  const { id } = params;
  const { post } = await getTaskById(id);
  const { title, description } = post;

  return (
    <>
      <EditTaskForm id={id} title={title} description={description} />
    </>
  );
}
