import { useState, useEffect } from "react";
import "./styles.css";

import { Card, CardProps } from "../../components/Card/index";

type APIProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name:string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);
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

  // useEffect(() => {
  //   console.log("useEffect ran.");
  // }, [students]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/dimas-prates")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.name,data.avatar_url)
  //       setUser({
  //         name: data.name,
  //         avatar: data.avatar_url,
  //       });
  //       // console.log(user)
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/dimas-prates");
      const data = await response.json() as APIProfileResponse;
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Attendance List</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="profile pic" />
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
        <Card name={student.name} 
        time={student.time} 
        key={student.time} />
      ))}
    </div>
  );
}
