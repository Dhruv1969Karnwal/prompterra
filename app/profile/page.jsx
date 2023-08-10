"use client";

import {  useState } from "react";

import Profile from "@components/Profile";

const MyProfile = () => {

  const [myPosts, setMyPosts] = useState([]);



  const handleEdit = (post) => {
  };

  const handleDelete = async (post) => {

    }

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;