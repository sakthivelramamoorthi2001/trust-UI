import React, { useState } from "react";

export default function ContactModal({close}) {
  const [open, setOpen] = useState(false);

  const styles = {
    overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    },
    modal: {
      width: "420px",
      top:"80px",
      background: "#fff",
      borderRadius: "12px",
      padding: "30px",
      position: "relative",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      animation: "pop 0.3s ease",
    },
    close: {
      position: "absolute",
      right: "15px",
      top: "15px",
      border: "none",
      // background: "none",
      fontSize: "18px",
      cursor: "pointer",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      fontSize: "14px",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      fontSize: "14px",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#2b7cff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
    },
    openBtn: {
      padding: "10px 20px",
      background: "#2b7cff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    close(false);
  };

  return (
    <>
     
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <button style={styles.close} onClick={() => close(false)}>
              ✕
            </button>

            <h2>Contact Us</h2>
            <p style={{ marginBottom: "20px", color: "#666" }}>
              Fill the form and we will contact you.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                style={styles.input}
                required
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                style={styles.input}
                required
              />

              <textarea
                rows="4"
                placeholder="Description"
                style={styles.textarea}
              ></textarea>

              <button type="submit" style={styles.button}>
                Submit
              </button>
            </form>
          </div>
        </div>
    </>
  );
}