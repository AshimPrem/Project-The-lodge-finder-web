import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/inputbox";
import Navbar from "../components/navbar";
import Subheading from "../components/subheading";
import { Link } from "react-router-dom";
export default function Signup(){
    return (
        <div>
             <div>
             {<Navbar/>}
             </div>
             <div  style={{
                marginLeft:'100px',
                border:'2px solid black',
                height:'400px',
                width:'300px',
                gap:'50px',
                marginTop:'100px', 
                paddingTop:'20px'
             }}>
                <div style={{
                    
                }}>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        padding:'10px'
                    }}>
                        <Heading label={"sign up"}/>
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        padding:'5px'
                    }}>
                        <Subheading label={"Please enter your credentials"}/>
                    </div>
                    <div style={{
                        display:'flex',
                        justifyContent:'center'
                    }}>
                    <div style={{
                     
                    }}>
                        <div style={{
                            margin:'10px'
                        }}>
                            <InputBox label={"Name"}/>
                        </div>
                        <div style={{
                            margin:'10px'
                        }}>
                            <InputBox label={"Email"}/>
                        </div>
                        <div style={{
                            margin:'10px'
                        }}>
                            <InputBox label={"Password"}/>
                        </div>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            padding:"10px"
                        }}>
                        <Button label={"Sign up"}/>
                        </div>
                       <div style={{
                        display:'flex',
                        gap:'10px'
                       }}>
                            <div>
                            <Subheading label={"Alreay have an account ?"}/>
                             </div>
                             <div>
                            <Link>login</Link>
                            </div>
                       </div>
                    </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}