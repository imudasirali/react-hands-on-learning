import { useEffect } from "react";
import { createPortal } from "react-dom";

export function DialogModal({ isOpen, onClose, children }) {
  useEffect(() => {
    function handler(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [onClose]);
  return createPortal(
    <>
      <dialog open={isOpen}>
        <div>{children}</div>
      </dialog>
    </>,
    document.querySelector("#modal-container")
  );
}
