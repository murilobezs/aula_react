import {categories} from "../Category";

import styles from "./Form.module.css";

function Form (){
    return(
        <section className={styles.container}>
            <h2>Cadastro de vídeos</h2>
            <form>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite da URL do vídeo"
                        required="required"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select>
                        <option value="-">Selecione uma categoria</option>
                        { categories.map(item =>{
                            return(
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </section>
    );
}

export default Form;