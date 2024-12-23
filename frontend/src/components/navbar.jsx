import Heading from "./Heading";
import Button from "./Button";
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>{<Heading label="Lodge finder web" />}</div>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Button label={"About us"} />
        <Button label={"Sign in"} />
      </div>
    </div>
  );
}
