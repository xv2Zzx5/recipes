import "./Footer.css"
import logo from "../../assets/logo.png"
import Nav from "../nav/Nav"
function Footer(props){
    return(
        <footer>
            <div className = "container">
                <img className = "logo" src = {logo} alt = "logo"/>
                <Nav/>
            </div>
        </footer>
    )
}
export default Footer