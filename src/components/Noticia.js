import React from 'react';

const Noticia = ({noticia}) => {

    const imageNoticia = (noticia.urlToImage) ? 
        <div className="card-image">
            <img src={noticia.urlToImage} alt={noticia.title}/>
            <span className="card-title">{noticia.author}</span>
        </div>
    :
    null;

    return (
        <div className="col s12 m6 l3">
            <div className="card">
                {imageNoticia}
                <div className="card-content">
                    <p>{noticia.title.slice(0,50)+`...`}</p>
                </div>
                <div className="card-action">
                    <a 
                        href={noticia.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Ir a Noticia</a>
                </div>
            </div>
        </div>
        
     );
}
 
export default Noticia;