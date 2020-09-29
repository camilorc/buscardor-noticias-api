import React, { Fragment, useEffect, useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaNoticias from './components/ListaNoticias'
import axios from 'axios'


function App() {

  const [category, setCategory] = useState('')
  const [news,setNews] = useState([])

  useEffect(() => {

    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=0d992e88d53b4c6591861840e154f501`

    const respuestaAPI = async () => {

      const respuesta = await axios.get(url)
      setNews(respuesta.data.articles)
    }
    respuestaAPI()

  }, [category])

  return (
    <Fragment>
      <Header
        titulo='Buscar Noticias'
      />

      <div className="container white">
        <Formulario
          setCategory={setCategory}
        />
      </div>
      
      <ListaNoticias
        news={news}
      />
    </Fragment>
  );
}

export default App;
