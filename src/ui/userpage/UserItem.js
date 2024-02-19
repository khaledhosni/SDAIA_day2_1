import React from "react";

const UserItem = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
    </div>
  );
};

export default UserItem;
