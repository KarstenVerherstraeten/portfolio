import style from "../modules/footer.module.css";


function Footer() {
    return (
        <div className={style.footer}>
        

            <p>© 2024 - Karsten Verherstraeten</p>

            <div className={style.icons}>
                <a href="https://www.linkedin.com/in/karsten-verherstraeten-7a1a3b1b3/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/KarstenVerherstraeten">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
