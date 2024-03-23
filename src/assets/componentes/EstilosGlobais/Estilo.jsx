import { Global, css } from "@emotion/react"

//aqui nao esquecer as aspas invertida e o * para selecionar todas as fontes
const estilos = css `
    * {
        font-family: 'Montserrat', sans-serif;
    }
`

export const Estilos = () =>{
     return(<Global  styles={estilos}/>)

}