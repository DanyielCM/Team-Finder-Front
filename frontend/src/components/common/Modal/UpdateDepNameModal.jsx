import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const UpdateDepNameModal = ({
  isOpen,
  setIsOpen,
  onConfirm,
  onCancel,
  title,
  inputLabel,
  departmentName,
  departmentDescription,
  onDepNameChange,
  onDepDescChange,
  peopleData,
  selectedManager,
  setSelectedManager,
}) => {
  const handleConfirm = () => {
    const departmentData = {
      departmentName: departmentName,
    
    };
    onConfirm(departmentData); // Call onConfirm function with departmentData
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
                <input
                  className={styles.modalInput}
                  type="text"
                  placeholder="Name of department"
                  value={departmentName}
                  onChange={(e) => onDepNameChange(e.target.value)}
                />

              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button className={styles.confirmBtn} onClick={handleConfirm}>
                    Confirm
                  </button>
                  <button
                    className={styles.cancelBtn}
                    onClick={() => onCancel()}
                  >
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

export default UpdateDepNameModal;
