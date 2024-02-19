import React from "react";
import { useState } from "react";

const DemoState = () => {
  const [count, setcount] = useState(0);
  const [user, setuser] = useState({
    username: "Khaled",
    email: "meckawy@gmail.com",
  });

  function handleIncrementButton(params) {
    setcount(count + 1);
  }

  function handleDecrementButton(params) {
    setcount(count - 1);
  }

  function handleUserButton(params) {
    setuser({ ...user, username: "Khaled Hosni" });
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrementButton}> Increment +</button>{" "}
      <button onClick={handleDecrementButton}>Decrement -</button>
      <br />
      <h2>{user.username}</h2>
      <h2>{user.email}</h2>
      <button onClick={handleUserButton}> Update User Data </button>
    </div>
  );
};

export default DemoState;
