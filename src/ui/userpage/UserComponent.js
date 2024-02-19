import React from "react";
import getAllUsers from "../../data/UserService";
import UserItem from "./UserItem";

const UserComponent = () => {
  let users = getAllUsers();

  let userContent = users.map((u) => {
    return <UserItem user={u} />;
  });
  return <div>{userContent}</div>;
};

export default UserComponent;
