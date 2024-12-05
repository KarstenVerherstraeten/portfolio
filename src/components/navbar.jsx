import style from '../modules/navbar.module.css';
import Logo from '../assets/logo/LogoW.svg';

function Navbar() {
    return (
        <nav>
        <div className={style.navbar}>

            <img className={style.logoimg} src={Logo} alt="Logo" />

            <div className={style.navItems}>
            <a title='Projects' href="#Projects">Projects</a>
            <p>-</p>
            <a title='Skills' href="#Skills">Skills</a>
            <p>-</p>
            <a title='About Me' href="#AboutMe">Introduction</a>
            <p>-</p>
            <a title='Contact' href="#Contact">Contact</a>
            </div>
       
        </div>
        </nav>
    );
    }

export default Navbar;