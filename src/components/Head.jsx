import style from '../modules/typeWriter.module.css';
import TypeWriter from './typeWriter';

function Head() {
    return (
        <div className={style.header}>
            <TypeWriter/>
        </div>
    )
}

export default Head;