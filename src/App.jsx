import './App.css'
import { CampoTexto } from './assets/componentes/CampoTexto/CampoTexto'
import { Card } from './assets/componentes/EstilosGlobais/Card'
import { Estilos } from './assets/componentes/EstilosGlobais/Estilo'
import { ProvedorTema } from './assets/componentes/ProvedorTema/ProvedorTema'
import { Tipografia } from './assets/componentes/Tipografia'



function App() {
  return (
    <ProvedorTema>
      <Estilos/>
      <Card>
      <Tipografia variante="h1" componente="h1">
          FREELANDO
        </Tipografia>
        <Tipografia variante="body" componente="body"></Tipografia>
            Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho. 
        <CampoTexto titulo= "Nome Completo"/>
      </Card>
    </ProvedorTema>
    
  )
}

export default App;
