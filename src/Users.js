import React from "react";
import { Link } from "react-router-dom";
import list from "./list";

function Users() {
  return (
    <div>
      {list.map(user => (
        <Link to={`/${user.name}`}>
          <p>{user.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Users;
