import React from "react";
import "./Selected.css";

export default function Selected({ modalContent, closeModal }) {
  return (
    <div className="selected">
      <div className="s-container">
        <img src={modalContent.image_url} alt={modalContent.title} />
        <h3>{modalContent.title}</h3>
        <p>{modalContent.description}</p>
        <span className="cross" onClick={closeModal}>
          X
        </span>
      </div>
    </div>
  );
}
