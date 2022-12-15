import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Project() {
  //   const parameters = useParams();
  const { userId } = useParams();
  const { projectId } = useParams();
  //   console.log(parameters);
  useEffect(() => {
    console.log(userId, projectId);
  }, [userId, projectId]);
  return (
    <div>
      <h1>
        {/* Profile and project of {`${parameters.userId} ${parameters.projectId}`} */}
        Profile and project of {`${userId} ${projectId}`}
      </h1>
    </div>
  );
}

export default Project;
