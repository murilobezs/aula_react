import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import img1 from "../Header/MuriFlix.png";

function Header(){
    return(
        <header className={styles.header} >
            <Link to="/">
               <span><img src={img1} alt=""/></span> 
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