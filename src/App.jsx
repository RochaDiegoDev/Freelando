import { Container } from 'react-grid-system'
import './App.css'
import { CampoTexto } from './assets/componentes/CampoTexto/CampoTexto'
import { Card } from './assets/componentes/EstilosGlobais/Card'
import { Estilos } from './assets/componentes/EstilosGlobais/Estilo'
import { ProvedorTema } from './assets/componentes/ProvedorTema/ProvedorTema'
import { Tipografia } from './assets/componentes/Tipografia'
import { Row } from 'react-grid-system'
import { Col } from 'react-grid-system'
import { BotaoEstilizado } from './assets/componentes/Botao/Botao'
import { ListaSuspensa } from './assets/componentes/ListaSuspensa/ListaSuspensa'

  const estadosBrasileiros = [
    { "text": "Acre", "value": "AC" },
    { "text": "Alagoas", "value": "AL" },
    { "text": "Amapá", "value": "AP" },
    { "text": "Amazonas", "value": "AM" },
    { "text": "Bahia", "value": "BA" },
    { "text": "Ceará", "value": "CE" },
    { "text": "Distrito Federal", "value": "DF" },
    { "text": "Espírito Santo", "value": "ES" },
    { "text": "Goiás", "value": "GO" },
    { "text": "Maranhão", "value": "MA" },
    { "text": "Mato Grosso", "value": "MT" },
    { "text": "Mato Grosso do Sul", "value": "MS" },
    { "text": "Minas Gerais", "value": "MG" },
    { "text": "Pará", "value": "PA" },
    { "text": "Paraíba", "value": "PB" },
    { "text": "Paraná", "value": "PR" },
    { "text": "Pernambuco", "value": "PE" },
    { "text": "Piauí", "value": "PI" },
    { "text": "Rio de Janeiro", "value": "RJ" },
    { "text": "Rio Grande do Norte", "value": "RN" },
    { "text": "Rio Grande do Sul", "value": "RS" },
    { "text": "Rondônia", "value": "RO" },
    { "text": "Roraima", "value": "RR" },
    { "text": "Santa Catarina", "value": "SC" },
    { "text": "São Paulo", "value": "SP" },
    { "text": "Sergipe", "value": "SE" },
    { "text": "Tocantins", "value": "TO" }
  ]

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
                  <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros}/>
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
                    <BotaoEstilizado variante="secundaria">Anterior</BotaoEstilizado>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <BotaoEstilizado>Proximo</BotaoEstilizado>
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
