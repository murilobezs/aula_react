import Footer from '../../components/Footer';
import Header from '../../components/Header';
import error404 from './error404.png'
import styles from "./PageNotFound.module.css";

function PageNotFound (){
    return(
                <>
            <Header/>
            <section className={styles.container}>
                <h2>Ops!</h2>
                <p>Conteúdo não localizado.</p>
                <img src={error404} alt="Logo de Página não encontrada"/>
            </section>
            <Footer/>
            </>
        
    );
}

export default PageNotFound;