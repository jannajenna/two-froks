import React from "react";
import styles from "../Cart/CartItem.module.css";

function NameInputField() {
  return (
    <div className={styles.formField}>
      <label htmlFor="form-name">Name</label>
      <input required placeholder="Full Name" type="text" name="name" id="form-name" />
    </div>
  );
}

export default NameInputField;
