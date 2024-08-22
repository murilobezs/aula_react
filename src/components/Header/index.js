import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header} >
            <span>TecMori</span> 
            <nav>
                <a href="#">Início</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    );
}

export default Header;