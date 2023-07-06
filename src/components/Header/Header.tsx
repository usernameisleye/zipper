const Header = () => {
  return (
    <header className="header">
        <nav>
            <img 
                src="/logo.svg" 
                alt="Logo" 
            />

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