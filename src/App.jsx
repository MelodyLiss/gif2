import React, { useState } from 'react'
import './App.css'
import { Buscador } from './components/Buscador'
import { SeccionGif } from './components/SeccionGif'

function App() {

  const [busqueda, setBusqueda] = useState('')
  console.log(busqueda);


  return (
    <>
      <header>
        <h1>Buscador de GIFs</h1>
        <Buscador
          setBusqueda={setBusqueda}
        />
      </header>

      <main>
        <SeccionGif
          busqueda={busqueda}
        />
      </main>

      <footer>
        <p>PROYECTO ELABORADO POR MELODY PARA CODEKIDS</p>
      </footer>
    </>
  )
}

export default App
