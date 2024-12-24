import Heading from "./Heading";
import Button from "./Button";
import Home from "../pages/home";
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
        <Button to={"/"} label={"Home"}/>
        <Button label={"About us"} />
        <Button to={"/signin"} label={"Sign in"} />
      </div>
    </div>
  );
}
