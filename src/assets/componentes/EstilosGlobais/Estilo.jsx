import { Global, } from "@emotion/react"

//aqui nao esquecer as aspas invertida e o * para selecionar todas as fontes
const estilos = tema => {
    return{
        html:{
            fontFamily: tema.fontFamily
        }
    }
}

export const Estilos = () =>{
     return(<Global  styles={estilos}/>)

}