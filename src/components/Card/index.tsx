import "./styles.css";
// Destructuring using props
// export function Card({name, time}) {
export function Card(props) {
  return (
    <div className="card">
      {/* Destructuring using props */}
      {/* <strong>Rodrigo Gonnçalves</strong>
      <small>10:15:24</small> */}
      {/* <strong>{name}</strong>
      <small>{time}</small> */}
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
