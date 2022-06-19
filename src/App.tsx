import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent, Position, Tooltip } from "@syncfusion/ej2-react-popups";
// import ReactTooltip from "react-tooltip";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className=""
            //  style={{ zIndex: "1000" }}
          >
            <div>
              <button
                type="button"
                //  onClick={() => setThemeSettings(true)}
                style={{ background: "blue", borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
