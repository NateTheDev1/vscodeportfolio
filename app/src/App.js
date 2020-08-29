import React from "react";
import ApplicationWindow from "./components/ApplicationWindow";
import HomeScreen from "./components/HomeScreen";
import { useSelector } from "react-redux";

const App = () => {
  const open = useSelector((state) => state.open);
  return (
    <div className="app-root">
      <HomeScreen />
      {open && <ApplicationWindow />}
    </div>
  );
};

export default App;
