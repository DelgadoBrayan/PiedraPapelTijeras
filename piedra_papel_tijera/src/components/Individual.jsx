import React, { useEffect, useState } from 'react'
import './individual.css'
import 'animate.css';
export const Individual = () => {
    const opciones = ['p', 'r', 's']
    const [punto, setPunto] = useState(0)
    const [puntoP, setPuntoP] = useState(0)
    const [empate, setEmpate] = useState(0)
    const [img, setImg] = useState()
    const [resCom, setResCom] = useState()
    const [respuestaElejida, setrespuestaElejida] = useState()
    const [estadoAnimacion, setestadoAnimacion] = useState(false)
    const [animacion, setAnimacion] = useState()
    
    const compararRespuesta = (respuesta) => {
        const opcionRandom = Math.floor(Math.random() * opciones.length)
        setrespuestaElejida(opcionRandom)
        const playUserComp = `${respuesta + opciones[opcionRandom]}`
        switch (playUserComp) {
            // Ganamos
            case 'rs':
                console.log("gano el usuario")
                setPunto(punto + 1)
                mostrarImg('src/assets/scissors.png', 'Tijera', 'gano')
                break;
            case 'sp': 
                console.log("gano el usuario")
                setPunto(punto + 1)
                mostrarImg('src/assets/paper.png', 'Papel', 'gano')
                break;
            case 'pr': 
                console.log("gano el usuario")
                setPunto(punto + 1)
                mostrarImg('src/assets/rock.png', 'Piedra', 'gano')
                break;
            // Gana la computadora
            case 'rp':
                console.log("gano el computador")
                setPuntoP(puntoP + 1)
                mostrarImg('src/assets/paper.png', 'Papel', 'perdio')
                
                break;
            case 'ps':
                console.log("gano el computador")
                setPuntoP(puntoP + 1)
                mostrarImg('src/assets/scissors.png', 'Tijera', 'perdio')
                
                break;
            case 'sr':
                console.log("gano el computador")
                setPuntoP(puntoP + 1)
                mostrarImg('src/assets/rock.png', 'Piedra', 'perdio')
                break;
            // Empatamos
            case 'rr':
                console.log("empate")
                setEmpate(empate + 1)
                mostrarImg('src/assets/rock.png', 'Piedra', 'empate')
                break
            case 'pp':
                console.log("empate")
                setEmpate(empate + 1)
                mostrarImg('src/assets/paper.png', 'Papel', 'empate')
                break
            case 'ss':
                console.log("empate")
                setEmpate(empate + 1)
                mostrarImg('src/assets/scissors.png', 'Tijera', 'empate')
                break
        }  
    }

    const mostrarImg =(src, respuesta, result)=>{  
            setImg(src)
            setResCom(respuesta)
            if(result == 'gano'){
                setAnimacion('animacionGano')
            }else if(result == 'perdio'){
                setAnimacion('animacionPerdio')
            }else if(result == 'empate'){
                setAnimacion('animacionEmpate')
            }
        setestadoAnimacion(!estadoAnimacion)
    }
    useEffect(()=>{       
        mostrarImg(img, resCom)
    }, [respuestaElejida, animacion])
    
    return (
        <article className='body'>
            <header className=''>
                <h1 className='animate__backOutUp'>Bienvenido a Piedra Pepel o tijeras</h1>
            </header>
            
            <div className='puntuacion'>
                <span className='animate__flash animate__infinite'><h1>Gano</h1> <h1>Perdio</h1> <h1>Empate</h1></span>
                <span className='animate__flash animate__infinite puntajes'><h1>{punto}</h1> <h1>{puntoP}</h1> <h1>{empate}</h1></span>
            </div>
            <section>
                <div className={estadoAnimacion ? animacion : ''}>
                    <img className='size_icon' src={img} alt="" />
                    <h1 className='res'>{resCom}</h1>
                </div>
            </section>
            <section className='sectiionP'>
                <div onClick={() => compararRespuesta('p')}>
                    <img className='size_icon' src="src/assets/paper.png" alt="" />
                    <h1>Papel</h1>
                </div>
                <div onClick={() => compararRespuesta('r')}>
                    <img className='size_icon' src="src/assets/rock.png" alt="" />
                    <h1>Piedra</h1>
                </div>
                <div onClick={() => compararRespuesta('s')}>
                    <img className='size_icon' src="src/assets/scissors.png" alt="" />
                    <h1>Tijera</h1>
                </div>
            </section>
        </article>
    )
}
