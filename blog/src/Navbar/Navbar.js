import './Navbar.css'

function Navbar() {
    return (
        <>
        <nav>
          <a href='/' className='Title'>El Escarraman Music</a>
          <ul>
            <li>
                <a href='/' className='App-home'>Home</a>
            </li>
            <li>
                <a href='/bandas' className='App-bandas'>Bandas</a>
            </li>
            <li>
                <a href='/pais' className='App-paises'>País</a>
            </li>
          </ul>
        </nav>
        </>
    );
}

export default Navbar;