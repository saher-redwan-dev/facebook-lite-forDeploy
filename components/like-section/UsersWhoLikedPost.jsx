import React, { useState } from "react";
import Modal from "../basic-items/Modal";
import useFetch_server from "../custom-hooks/useFetch_server";
import Link from "../basic-items/Link";
import LoadingSpinner from "../basic-items/LoadingSpinner";

export default function UsersWhoLikedPost({ _id_post, countOfLikes }) {
  const [open, setOpen] = useState();
  const [usersWholikeThisPost, setUsersWholikeThisPost] = useState([]);
  const [loading, setLoading] = useState();

  function toggleModal() {
    setOpen(!open);
  }

  async function getUsersWhoLikePost() {
    toggleModal();
    setLoading(true);
    const { data } = await useFetch_server(
      "POST",
      "http://localhost:3000/api/getUsersWhoLikePost",
      { post_id: _id_post }
    );
    setLoading(false);
    setUsersWholikeThisPost(data.data.likes.users);
  }

  function showUserWhoLikePost() {
    if (loading) {
      return (
        <div className="flex justify-center mt-3">
          <LoadingSpinner />
        </div>
      );
    } else if (!usersWholikeThisPost.length > 0) {
      return "no users liked this post";
    } else {
      return usersWholikeThisPost.map((user) => (
        <div key={user?._id} className="mb-[1rem]">
          <div>
            <Link href={`/profile/${user?._id}`} className="flex gap-2 w-fit">
              <div>
                <img
                  src={user?.image}
                  alt=""
                  className="w-[28.5px] h-[28.5px] rounded-[6px]"
                />
              </div>
              <span>{user?.name}</span>
            </Link>
          </div>
        </div>
      ));
    }
  }

  return (
    <>
      <button onClick={getUsersWhoLikePost}>{countOfLikes || "0"} likes</button>
      <Modal open={open} toggleModal={toggleModal}>
        <div className="">
          <h2 className="text-[1.35rem] mb-4">Users Who Liked This Post</h2>
          {showUserWhoLikePost()}
        </div>
      </Modal>
    </>
  );
}
