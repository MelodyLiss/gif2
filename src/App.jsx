import React, { useState } from 'react'
import './App.css'
import { Buscador } from './components/Buscador'
import { SeccionGif } from './components/SeccionGif'

function App() {

  const [busqueda, setBusqueda] = useState('')
  const [categorias, setCategorias] = useState({})
  console.log(busqueda);
  console.log("estas son mis",categorias);


  const agregarCategoria = (nuevaBusqueda) =>{

    if(nuevaBusqueda.trim() && !categorias[nuevaBusqueda]){
      setCategorias( prev => ({
        ...prev,
        [nuevaBusqueda]:{
          gifs: [],
          offset: 0
        }
      }))
    }
  }

  const actualizarGifsCategoria =(categoria,nuevosGifs) =>{
    setCategorias(prev => ({
      ...prev , [categoria]:{
        ...prev[categoria],
        gifs: nuevosGifs
      }
    }));
  }

  const actualizarOffsetCategoria = (categoria,nuevoOffset) =>{
    setCategorias(prev => ({
      ...prev,
      [categoria]:{
        ...prev[categoria],
        offset: nuevoOffset
      }
    }));
  }

  const eliminarCategoria = (categoria) =>{

    setCategorias( prev => {
      const copia = {...prev}
      delete copia[categoria]
      return copia 
    })
    
    }


  return (
    <>
      <header>
        <h1>Buscador de GIFs</h1>
        <Buscador
          setBusqueda={setBusqueda}
          agregarCategoria={agregarCategoria}
        />
      </header>

      <main>

        {Object.keys(categorias).map(categoria =>(
          <SeccionGif
            key={categoria}
            busqueda={categoria}
            gifs={categorias[categoria].gifs}
            offset={categorias[categoria].offset}
            actualizarGifs={actualizarGifsCategoria}
            actualizarOffset={actualizarOffsetCategoria}
            eliminarCategoria={eliminarCategoria}
          />
        ))}


        
        
      </main>

      <footer>
        <p>PROYECTO ELABORADO POR MELODY PARA CODEKIDS</p>
      </footer>
    </>
  )
}

export default App
