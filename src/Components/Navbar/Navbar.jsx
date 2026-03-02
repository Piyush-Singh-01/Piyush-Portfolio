import React, { useState ,useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
     menuRef.current.style.right = "0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right = "-250px";
  }

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" /> */}
       <h1>Piyush</h1>
       <img src={menu_open} onClick={openMenu} className='nav-mob-open' />
       <ul ref={menuRef} className="nav-menu">
         <img src={menu_close} onClick={closeMenu} className='nav-mob-close'/>
         <li><AnchorLink className='anchor-link' href='#home' offset={50} onClick={closeMenu}><p onClick={()=> setMenu("home")}>Home</p></AnchorLink></li>
         <li><AnchorLink className='anchor-link' href='#about' offset={50} onClick={closeMenu}><p onClick={()=> setMenu("about")}>About me</p></AnchorLink></li>
         <li><AnchorLink className='anchor-link' href='#services' offset={50} onClick={closeMenu}><p onClick={()=> setMenu("services")}>Services</p></AnchorLink></li>
         <li><AnchorLink className='anchor-link' href='#work' offset={50} onClick={closeMenu}><p onClick={()=> setMenu("work")}>Portfolio</p></AnchorLink></li>
         <li><AnchorLink className='anchor-link' href='#contact' offset={50} onClick={closeMenu}><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink></li>
       </ul>
       <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}>Connect with me</AnchorLink></div>
    </div>
  );
}

export default Navbar