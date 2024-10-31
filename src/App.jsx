import { useState } from "react";
import { CustomModal } from "./components/CustomModal";
import { DialogModal } from "./components/DialogModal";
import "./styles.css";
function App() {
  const [display, setDisplay] = useState(false);
  const [displayDialog, setDisplayDialog] = useState(false);

  return (
    <>
      <button onClick={() => setDisplay(!display)}>Show Custom Modal</button>
      <br />
      <button onClick={() => setDisplayDialog(!displayDialog)}>
        Show Dialog Modal
      </button>
      <CustomModal onClose={() => setDisplay(false)} isOpen={display}>
        <p>This is modal content</p>
        <button onClick={() => setDisplay(!display)}>Close</button>
      </CustomModal>
      <br />
      <DialogModal
        onClose={() => setDisplayDialog(false)}
        isOpen={displayDialog}
      >
        <p>This is a dialog modal</p>
        <button onClick={() => setDisplayDialog(!displayDialog)}>Close</button>
      </DialogModal>
    </>
  );
}

export default App;
