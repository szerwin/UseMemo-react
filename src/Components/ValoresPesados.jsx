import { useMemo, useState } from "react"

export const ValoresPesados = () => {

    const [listaNumero, setlistaNumero] = useState([1,2,3,4,5,6])
const [show,setShow] = useState(true)

const getCalculo =(listaNumero) => useMemo(()=>{
    console.log('calculando')
    return listaNumero.reduce((a,b)=> a*b,)
    },[listaNumero])

const agregarNumero=()=>{
    setlistaNumero([...listaNumero, listaNumero[listaNumero.length-1]+1]) 
    console.log(listaNumero)
    }

  return (
    <>
    <h1>Cálculando</h1>
    <p>{getCalculo (listaNumero)}</p>
    <button className="btn btn-primary" onClick={()=> setShow(!show)}>{show ? 'show': 'hide'}</button>
    <button className="btn btn-primary" onClick={()=> agregarNumero()}>agregar número</button>
    </>
  )
}
