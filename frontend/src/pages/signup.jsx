import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/inputbox";
import Navbar from "../components/navbar";
import Subheading from "../components/subheading";
import { Link } from "react-router-dom";
import axios from "axios"
export default function Signup() {
  const [name ,setName] =useState("")
  const [email ,setEmail] =useState("")
  const [password ,setPassword] =useState("")
  return (
    <div>
      <div>{<Navbar />}</div>
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
            <Heading label={"sign up"} />
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
                <InputBox onChange={e=>{
                  setName(e.target.value)
                }} label={"Name"} somePlaceholder={"e.g John doe"} />
              </div>
              <div
                style={{
                  margin: "10px",
                }}
              >
                <InputBox 
                  onChange={e=>{
                    setEmail(e.target.value)
                  }}
                  label={"Email"}
                  somePlaceholder={"e.g john@gmail.com"}
                />
              </div>
              <div
                style={{
                  margin: "10px",
                }}
              >
                <InputBox onChange={e=>{
                  setPassword(e.target.value);
                }} label={"Password"} somePlaceholder={"e.g 123456 "} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                {<Button onClick={async(e)=>{
                       await axios.post("http://localhost:3000/api/v1/users/signup",{
                        name,
                        email,
                        password
                      }, {
                        headers: {
                        'Content-Type': 'application/json'  // Ensure this header is set to application/json
                      }
                    })
                }} label={"Sign up"} />}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <div>
                  <Subheading label={"Alreay have an account ?"} />
                </div>
                <div>
                  <Link to={"/signin"}>Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
