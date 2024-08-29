import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header} >
            <Link to="/">
                <span>TecMori</span> 
            </Link>
            
            <nav>
                <Link to="/">Início</Link>
                <Link to="/search">Pesquisar</Link>
                <Link to="/favorites">Favoritos</Link>
            </nav>
        </header>
    );
}

export default Header;