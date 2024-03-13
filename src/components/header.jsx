import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className=''>
        <header>
            <nav>
                <ul>
                    <div className='flex flex-col mr-96 ml-8'>

                    <li>Raymond</li>
                    </div>

                    <div className='mr-96'>

                    </div>
                    
                    
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    
    </div>
  )
}
export default Header;
