import React from "react";
import ApplicationWindow from "./components/ApplicationWindow";
import HomeScreen from "./components/HomeScreen";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Terminal from "./components/Terminal";

const App = () => {
  const open = useSelector((state) => state.open);
  const terminalOpen = useSelector((state) => state.terminalOpen);

  return (
    <div className="app-root">
      <HomeScreen />
      {open && (
        <AnimatePresence>
          <ApplicationWindow />
        </AnimatePresence>
      )}
      {terminalOpen && (
        <AnimatePresence>
          <Terminal />
        </AnimatePresence>
      )}
    </div>
  );
};

export default App;
