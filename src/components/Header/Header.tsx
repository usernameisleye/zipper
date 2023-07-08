import { FiMenu } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="header">
        <nav>
            <img 
                src="/logo.svg" 
                alt="Logo" 
            />
            
            <button className="menu">
                <FiMenu />
            </button>

            <ul role="list">
                <li>
                    About
                </li>
                <li>
                    Discover
                </li>
                <li>
                    Get Started
                </li>
            </ul>
        </nav>
    </header>
)
}

export default Header