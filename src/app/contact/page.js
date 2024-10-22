"use client";
import React, { useState } from "react";
import styles from "../contact/contact.module.css";

export default function Page() {
  const [email, setEmail] = useState("");
  const [secondEmail, setSecondEmail] = useState("");

  const checkEmail = () => {
    if (email != secondEmail) {
      alert("Email's dont match");
    }
  };

  return (
    <div className={styles.divForm}>
      <h2>Reach Out To US!</h2>
      <div className={styles.test}>
        <label>First Name:</label>
        <input type="text" />
        <label>Last Name:</label>
        <input type="text" />
        <label>Email Address:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label>Confirm Email Address:</label>
        <input type="text" onChange={(e) => setSecondEmail(e.target.value)} />
        <label>Ask a question:</label>
        <textarea />
        <button onClick={(e) => checkEmail()}>Submit</button>
      </div>
    </div>
  );
}
