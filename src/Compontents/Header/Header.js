import React from "react";
import "./Header.css";

export default function Header({ handleBeasts }) {
  return (
    <header>
      <div className="Header-div">
        <h1> Beast World</h1>
        <div className="selectDiv">
          <label className="horns-label" htmlFor="hornsInput">
            Select beast by # horns
          </label>
          <select
            name="selectedHorns"
            className="custom-select"
            id="hornsInput"
            onChange={handleBeasts}
          >
            <option value="">all</option>
            <option value="1">not many</option>
            <option value="2">some</option>
            <option value="3">few</option>
            <option value="4">more</option>
          </select>
        </div>
      </div>
    </header>
  );
}
