import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import AComponent from "./AComponent";
import BComponent from "./BComponent";

// const navigate = useNavigate();
// navigate('/other-page', { state: { id: 7, color: 'green' } }

const MyApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootComp />} />
        <Route path="/acomponent" element={<AComponent />} />
        <Route path="/bcomponent" element={<BComponent />} />
      </Routes>
    </Router>
  );
};

const RootComp = () => {
  const navigate = useNavigate();

  let user = { username: "meshmesh", email: "meshmesh@gmail.com" };
  function handlegotoBButton(params) {
    // navigate("/bcomponent?username=khaled");

    navigate("/bcomponent", { state: user });
  }
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Link to={"/acomponent"}>A Component </Link> <br></br>
      <Link to={"/bcomponent"}>B Component</Link> <br />
      <button onClick={handlegotoBButton}>Go to B Component</button>
    </div>
  );
};

export default MyApp;
