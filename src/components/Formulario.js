import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect'


const Formulario = ({setCategory}) => {

    const OPTION =[
        {value:'general',label:'General'},
        {value:'science',label:'Ciencia'},
        {value:'sports',label:'Deportes'},
        {value:'technology',label:'Tecnología'},
        {value:'business',label:'Negocios'},
    ]


    const [categoria,SelectCategoria] = useSelect('general',OPTION)

    const handleSubmit = e =>{
        e.preventDefault()
        setCategory(categoria)

    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    <SelectCategoria/>
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="buscar"
                        />
                    </div>
                </form>
            </div>   
        </div>
     );
}
 
export default Formulario;