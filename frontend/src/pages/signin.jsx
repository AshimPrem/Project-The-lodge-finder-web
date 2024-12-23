import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/inputbox";
import Navbar from "../components/navbar";
import Subheading from "../components/subheading";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div>
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
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div>{<Button label={"About us"} />}</div>
          <div>{<Button label={"Sign up"} />}</div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "100px",
          border: "2px solid black",
          height: "400px",
          width: "300px",
          gap: "50px",
          marginTop: "100px",
          paddingTop: "20px",
        }}
      >
        <div style={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <Heading label={"sign in"} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5px",
            }}
          >
            <Subheading label={"Please enter your credentials"} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{}}>
              <div
                style={{
                  margin: "10px",
                }}
              >
                <InputBox
                  label={"Email"}
                  somePlaceholder={"e.g john@gmail.com"}
                />
              </div>
              <div
                style={{
                  margin: "10px",
                }}
              >
                <InputBox label={"Password"} somePlaceholder={"e.g 1235"} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Button label={"Sign in"} />
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <div>
                  <Subheading label={"Don't have an account ?"} />
                </div>
                <div>
                  <Link>Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
