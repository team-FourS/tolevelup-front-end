//import { render } from '@testing-library/react'
import '../css/Header.css'
import {Routes, Route, Link} from "react-router-dom";
import Logout from "../component/Logout";

function Header () {
    return (
        <header className="header">          
            <div>
                <Routes>     
                    <Route path="/Logout" element={<Logout />} />
                </Routes>
                
                <div>
                    <h3 style={{textAlign:'right', margin:'30px', marginRight:'20px'}}> __님, 어서오세요   
                    <Link to="/Logout">               
                        <button className='btnlogout' style={{marginLeft:'20px'}}>로그아웃</button>
                    </Link>    
                    </h3>                       
                </div>

                <hr/>
            </div>
        </header>
    )
}

export default Header;