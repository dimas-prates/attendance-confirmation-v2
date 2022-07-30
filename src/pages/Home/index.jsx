import "./styles.css";

import { Card } from "../../components/Card/index";
export function Home() {
  return (
    <div className="container">
      <h1>Attendance Confirmation</h1>
      <input type="text" placeholder="Type name..." />
      <button type="button">Add</button>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
