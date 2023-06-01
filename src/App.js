import { useState } from "react";
import ModalDialog from "./components/ModalDialog";
import { createPortal } from "react-dom";
import { ClipLoader } from "react-spinners";
import "./App.css";
import Wrapper from "./components/Wrapper";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSpnner, setShowSpinner] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      <button onClick={() => setShowSpinner(true)}>Show spinner</button>
      {showModal &&
        createPortal(
          <Wrapper>
            <ModalDialog onClose={() => setShowModal(false)} />
          </Wrapper>,
          document.getElementById("portalPlaceholder")
        )}
      {showSpnner &&
        createPortal(
          <Wrapper onClick={() => setShowSpinner(false)}>
            <ClipLoader />
          </Wrapper>,
          document.getElementById("portalPlaceholder")
        )}
    </div>
  );
};

export default App;
