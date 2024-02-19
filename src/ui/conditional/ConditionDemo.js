import React from "react";
import { useState, useEffect } from "react";

const ConditionDemo = () => {
  const [isDowanloaded, setisDowanloaded] = useState(false);

  useEffect(() => {
    // downloading code will be performed after rendering

    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setisDowanloaded(true);
      });
  }, []);

  return (
    <div>
      {isDowanloaded ? <UserData /> : <DownloadingDialog />}

      <br />
    </div>
  );
};

const DownloadingDialog = () => {
  return (
    <div>
      <h3>Downloading.....</h3>
    </div>
  );
};

const UserData = () => {
  return (
    <div>
      <h1>Data has been completly loaded!</h1>
    </div>
  );
};

export default ConditionDemo;
