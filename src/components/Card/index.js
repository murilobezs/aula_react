import styles from "./Card.module.css";

function Card({id}){
    return(
        <section className={styles.card}>
            <a href={`https://youtu.be/${id}?si=RYdAo-hQmVxtBSbx`}
                rel="noreferrer noopener"
                target="_blank">
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoC3wYEdfT44Nt98Ri6BajhUMVhQ`} alt="Capa"/>
            </a>
        </section>
    );
}

export default Card;