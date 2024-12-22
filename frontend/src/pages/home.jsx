import Navbar from "../components/navbar"
import Button from "../components/Button"
export default function Home(){
    return (
        <div>
            {<Navbar/>}
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}>
                <div style={{
                border:'2px solid black',
                margin:'20px',
                width:'800px',
                height:'400px',
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center ',
            }}>
                <p>add some snaps</p>
                </div>
            </div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                padding:'10px'
            }}>
                <Button label="get started"/>
            </div>
        </div>
    )
}