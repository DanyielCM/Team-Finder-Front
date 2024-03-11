
import React, { useState } from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ isOpen, setIsOpen, onConfirm, onCancel, title, options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleConfirm = () => {
    if (selectedOption) {
      onConfirm(selectedOption); // Call the parent component's onConfirm function with the selected option
      setIsOpen(false); // Close the modal only after confirming
    }
  };

  return (
    <>
      {isOpen && (
        <>
          <div className={styles.darkBG} onClick={() => onCancel()} />
          <div className={styles.centered}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <h5 className={styles.heading}>{title}</h5>
              </div>
              <div className={styles.modalContent}>
                {options && (
                  <select
                    className={styles.select}
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    <option value="">Assign a role</option>
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.confirmBtn} onClick={handleConfirm}>
                    Confirm
                  </button>
                  <button className={styles.cancelBtn} onClick={onCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
