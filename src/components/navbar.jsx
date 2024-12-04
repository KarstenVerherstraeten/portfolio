import style from '../modules/navbar.module.css';
import Logo from '../assets/logo/LogoW.svg';

function Navbar() {
    return (
        <div className={style.navbar}>

            <img className={style.logoimg} src={Logo} alt="Logo" />

            <div className={style.navItems}>
            <a href="#Projects">Projects</a>
            <p>-</p>
            <a href="#Skills">Skills</a>
            <p>-</p>
            <a href="#Introduction">Introduction</a>
            <p>-</p>
            <a href="#Contact">Contact</a>
            </div>
       
        </div>
    );
    }

export default Navbar;