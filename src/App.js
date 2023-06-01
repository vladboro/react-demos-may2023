import { useState } from "react";
import ModalDialog from "./components/ModalDialog";
import { createPortal } from "react-dom";
import { ClipLoader } from "react-spinners";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSpnner, setShowSpinner] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      <button onClick={() => setShowSpinner(true)}>Show spinner</button>
      {showModal &&
        createPortal(
          <ModalDialog onClose={() => setShowModal(false)} />,
          document.getElementById("portalPlaceholder")
        )}
      {showSpnner &&
        createPortal(
          <div className="background" onClick={() => setShowSpinner(false)}>
            <div className="clip">
              <ClipLoader />
            </div>
          </div>,
          document.getElementById("portalPlaceholder")
        )}
    </div>
  );
};

export default App;
