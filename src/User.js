import React from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";

function User() {
  const { id } = useParams();

  return (
    <div>
      <Title id={id} />
      <p>{id}</p>
    </div>
  );
}

export default User;
