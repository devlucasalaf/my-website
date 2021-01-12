import React, {useState} from 'react'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

    return (
        <div id='header-container'>            
            <div onClick={handleMenu} className='menu-btn'>
              <div id={menuOpen === false ? 'bar1' : 'bar1-open'} className='menu-bar'></div>
              <div id={menuOpen === false ? 'bar2' : 'bar2-open'} className='menu-bar'></div>
              <div id={menuOpen === false ? 'bar3' : 'bar3-open'} className='menu-bar'></div>
            </div>
            <div id={menuOpen === false ? 'menu-closed' : 'menu-openned'} className='menu-wrapper'>
              <a href='/sobre' id={menuOpen === false ? 'sobre' : 'sobre-open'} className='menu-items'>Sobre</a>
              <a id={menuOpen === false ? 'projetos' : 'projetos-open'} className='menu-items'>Projetos</a>
              <a id={menuOpen === false ? 'contato' : 'contato-open'} className='menu-items'>Contato</a>
            </div>
        </div>
    )
}

export default Header