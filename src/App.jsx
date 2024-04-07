import { Container } from 'react-grid-system'
import './App.css'
import { CampoTexto } from './assets/componentes/CampoTexto/CampoTexto'
import { Card } from './assets/componentes/EstilosGlobais/Card'
import { Estilos } from './assets/componentes/EstilosGlobais/Estilo'
import { ProvedorTema } from './assets/componentes/ProvedorTema/ProvedorTema'
import { Tipografia } from './assets/componentes/Tipografia'
import { Row } from 'react-grid-system'
import { Col } from 'react-grid-system'
import { Botao } from './assets/componentes/Botao/Botao'


function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Container style={{ margin: '80px 0' }}>
        <Row justify='center'>
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                FREELANDO
              </Tipografia>
              <Tipografia variante="body" componente="body"></Tipografia>
              Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={4} sm={4}>
                  <CampoTexto titulo="Estado" />
                </Col>

                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade" />
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <CampoTexto titulo="E-mail" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a Senha" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <div style={{textAlign: 'left'}}>
                    <Botao variante="secundaria">Anterior</Botao>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Botao>Proximo</Botao>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

      </Container>
    </ProvedorTema>

  )
}

export default App;
