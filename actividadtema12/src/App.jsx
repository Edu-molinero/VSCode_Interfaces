import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './Boton'
import Contador from './Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Botones personalizados</h1>
      <Boton texto="Botón Verde" color="green" onClick={() => alert ('Este botón es de color verde')} />

      <Boton texto="Botón Rojo" color="red" onClick={() => alert ('Este botón es de color rojo')} />
        
      <Boton texto="Botón Azul" color="blue" onClick={() => alert ('Este botón es de color azul')} />

      <h1>Contador {count}</h1>
      <Boton texto="Incrementar" color="purple" onClick={() => setCount(count + 1)} />
      <Boton texto="Decrementar" color="orange" onClick={() => setCount(count - 1)} />

    </div>

    
    
    </>
    
  )
}

export default App
