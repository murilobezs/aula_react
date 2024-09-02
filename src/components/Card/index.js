import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnFavorite from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";


function Card({id}){

    const{favorite, addFavorite} = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = !isFavorite ? iconFavorite : iconUnFavorite

    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoC3wYEdfT44Nt98Ri6BajhUMVhQ`} 
                alt="Capa" className={styles.cover}/>
            </Link>
            <figure className={styles.icon}>
                <img 
                    src={icone} 
                    alt="Ícone"
                    onClick={() => addFavorite({id})}
                    />
            </figure>
        </section>
    );
}

export default Card;