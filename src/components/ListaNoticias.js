import React from 'react'
import Noticia from './Noticia'

const ListaNoticia = ({ news }) => {
    return (
        <div className="row">

            {news.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    );
}

export default ListaNoticia;