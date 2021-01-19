import React, { Fragment } from "react";
import Map from "./components/Map.js";
import NavBar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";

const App = () => {
  return (
    <Fragment>
      <Sidebar>
        <Map />
      </Sidebar>
    </Fragment>
  );
};

export default App;
