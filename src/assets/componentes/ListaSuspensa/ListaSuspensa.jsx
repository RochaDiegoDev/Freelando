import styled from "@emotion/styled"
import { useState } from "react"
import { ItemListaSuspensaEstilizada } from "./ItemListaSuspensaEstilizada"
import { ListaSuspensaEstilizada } from "./ListaSuspensaEstilizada"
import PropTypes from 'prop-types';


const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;

`

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.estaAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estaAberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`

export const ListaSuspensa = ({ titulo, opcoes }) => {
    const [estarAberta, alternarVisibilidade] = useState(false)

    const [opcaoFocada, setOpcaoFocada] = useState(null);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const manipularTeclaDoTeclado = (evento) => {
        alternarVisibilidade(true)
        switch (evento.key) {
            case 'ArrowDown':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (focoAntigo == null) {
                        return 0;
                    }
                    if (focoAntigo === (opcoes.length - 1)) {
                        return opcoes.length - 1
                    }
                    return focoAntigo += 1
                })
                break;

            case 'ArrowUp':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (!focoAntigo) {
                        return 0;
                    }
                    return focoAntigo -= 1
                })

                break;
            case 'Enter':
                evento.preventDefault()
                setOpcaoFocada(null)
                alternarVisibilidade(false)
                setOpcaoSelecionada(opcoes[opcaoFocada])
                break;
            
            case 'Escape':
                    evento.preventDefault();
                    setOpcaoFocada(null)
                    alternarVisibilidade(false)
                    break;
            
            case 'Tab':
                    setOpcaoFocada(null)
                    alternarVisibilidade(false)
                    break;

            default:
                break;
        }
    }

    return ( <LabelEstilizada >
            {titulo}
            <BotaoEstilizado
                estarAberta={estarAberta}
                onClick={() => alternarVisibilidade(!estarAberta)}
                onKeyDown={manipularTeclaDoTeclado}
            >
                <div className='BotaoEstilizadoEstado'>
                   {opcaoSelecionada ? opcaoSelecionada.text : 'Selecione'}
                </div>

                <div >
                    <span>{estarAberta ? '▲' : '▼'}</span>
                </div>

            </BotaoEstilizado>
            {estarAberta && <ListaSuspensaEstilizada>
                {opcoes.map((opcao, index) => <ItemListaSuspensaEstilizada
                    key={opcao.value}
                    focoAtivo={index === opcaoFocada}
                    onClick={() => setOpcaoSelecionada(opcao)}
                    >
                    {opcao.text}
                    </ItemListaSuspensaEstilizada>)}
            </ListaSuspensaEstilizada>}
        </LabelEstilizada>)
}

ListaSuspensa.propTypes = {
    children: PropTypes.node,
    titulo: PropTypes.string,
    opcoes: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.string,
    })),
}