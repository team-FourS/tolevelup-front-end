//import { render } from '@testing-library/react'
import '../css/Header.css'

const Header = () => {
    return (
        <header className="header">
            
            <div>
                <main>
                    <h3 style={{textAlign:'right', margin:'30px', marginRight:'20px'}}> __님, 어서오세요                  
                        <button className='btnlo' style={{marginLeft:'20px'}}>로그아웃</button>
                    </h3>
                    
                </main>
                <hr/>
            </div>
        </header>
    )
}

export default Header;