import './App.css'
import { Card } from './assets/componentes/EstilosGlobais/Card'
import { Estilos } from './assets/componentes/EstilosGlobais/Estilo'
import { ProvedorTema } from './assets/componentes/ProvedorTema/ProvedorTema'

function App() {
  return (
    <ProvedorTema>
      <Estilos/>
      <Card>
      <h1>FREELANDO</h1>
      </Card>
    </ProvedorTema>
  )
}

export default App
