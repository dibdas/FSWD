import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  //   const parameters = useParams();
  const { userId } = useParams();
  console.log(userId);
  useEffect(() => {
    console.log(userId);
  }, [userId]);
  return (
    <div>
      <h1>Profile of {`${userId}`}</h1>
    </div>
  );
}

export default Profile;
