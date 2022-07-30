import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card/index";
export function Home() {
  const [userName, setUserName] = useState();
  return (
    <div className="container">
      {/* <h1>Attendance Confirmation</h1> */}
      <h1>Name: {userName}</h1>
      <input
        type="text"
        placeholder="Type name..."
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button type="button">Add</button>
      <Card name="Jonas" time="10:14:29" />
      <Card name="Felipe" time="21:24:27" />
      <Card name="Nathália" time="08:44:23" />
    </div>
  );
}
