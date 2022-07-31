import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card/index";
export function Home() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    // setStudents([newStudent]);
    setStudents((prevState) => [...prevState, newStudent]);
  }
  return (
    <div className="container">
      <header>
        <h1>Attendance List</h1>
        <div>
          <strong>Name</strong>
          <img src="https://github.com/dimas-prates.png" alt="profile pic" />
        </div>
      </header>
      {/* <h1>Attendance Confirmation</h1> */}
      <h1>Name: {studentName}</h1>
      <input
        type="text"
        placeholder="Type name..."
        onChange={(e) => {
          setStudentName(e.target.value);
        }}
      />
      <button type="button" onClick={handleAddStudent}>
        Add
      </button>

      {students.map((student) => (
        <Card name={student.name} time={student.time} key={student.time} />
      ))}
    </div>
  );
}
