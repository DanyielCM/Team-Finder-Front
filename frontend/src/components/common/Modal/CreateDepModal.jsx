import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ isOpen, setIsOpen, onConfirm, onCancel, title, inputLabel, inputValue, onInputChange }) => {
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
                {inputLabel && (
                  <input
                    className={styles.modalInput}
                    type="text"
                    placeholder={inputLabel}
                    value={inputValue}
                    onChange={(e) => onInputChange(e.target.value)}
                  />
                )}
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.confirmBtn} onClick={onConfirm}>
                    Confirm
                  </button>
                  <button className={styles.cancelBtn} onClick={() => onCancel()}>
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
