import React from "react";
import ApplicationWindow from "./components/ApplicationWindow";
import HomeScreen from "./components/HomeScreen";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const open = useSelector((state) => state.open);
  return (
    <div className="app-root">
      <HomeScreen />
      {open && (
        <AnimatePresence>
          <ApplicationWindow />
        </AnimatePresence>
      )}
    </div>
  );
};

export default App;
