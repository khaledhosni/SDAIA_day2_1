import React from "react";
import { useLocation } from "react-router-dom";

// const {state} = useLocation();
// const { id, color } = state;
const BComponent = () => {
  //   const searchParam = new URLSearchParams(window.location.search);
  //   let username = searchParam.get("username");

  const { state } = useLocation();

  return (
    <div>
      <h1>B component</h1>
      <h3>Welcome {state.username}</h3>
    </div>
  );
};

export default BComponent;
