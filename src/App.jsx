import { useState } from 'react'


import './App.css'



function Boton({value, handleClick}){
  return (
    <button className='boton' onClick={handleClick}>{value}</button>
  )
}

function App() {

  const [valor, setValor] = useState({operador:''});

  const escritura = (event)=> {
    const unid = event.target.innerText;

    if (valor.operador.length >= 13) return

    if (unid === '+' && valor.operador === '' || unid === '-' && valor.operador === '' || unid === '*' && valor.operador === '' || unid === '/' && valor.operador === ''|| unid === '%' && valor.operador === ''){
      setValor({...valor, operador: `0${valor.operador}` + unid})
    }
    else {
    setValor({...valor, operador: `${valor.operador}` + unid})
    }


  }

  const eliminar = () => {
    setValor({...valor, operador: valor.operador.slice(0, valor.operador.length - 1)})
  }

  const eliminarTodo = () => {
    setValor({...valor, operador: '', resultado: ''})
  }

  const resultado = () => {

    let respuesta = '';
    
    
    if (valor.operador.includes('%')){
      const porcen = valor.operador.split('%');
      respuesta = eval(`${porcen[1]}*${porcen[0]}/100`);
    } else {
      respuesta = eval(valor.operador);
    }

    setValor({...valor, operador: `${respuesta}`})
  }


  return (
    <>
      <div>
        <h1>CALCULADORA</h1>
     </div>
     <main>
        <div>
         <div className='visor'>
          <span className='operacion'>{valor.operador}</span>
         </div>
        </div>
        <section>
          <div>
            <Boton value={"AC"} handleClick={eliminarTodo}/>
            <Boton value={"EC"}  handleClick={eliminar}/>
            <Boton value={"%"} handleClick={escritura}/>
            <Boton value={"/"} handleClick={escritura}/>            
          </div>
          <div>
            <Boton value={"7"} handleClick={escritura}/>
            <Boton value={"8"} handleClick={escritura}/>
            <Boton value={"9"} handleClick={escritura}/>
            <Boton value={"*"} handleClick={escritura}/>            
          </div>
          <div>
            <Boton value={"4"} handleClick={escritura}/>
            <Boton value={"5"} handleClick={escritura}/>
            <Boton value={"6"} handleClick={escritura}/>
            <Boton value={"-"} handleClick={escritura}/>            
          </div>
          <div>
            <Boton value={"3"} handleClick={escritura}/>
            <Boton value={"2"} handleClick={escritura}/>
            <Boton value={"1"} handleClick={escritura}/>
            <Boton value={"+"} handleClick={escritura}/>            
          </div>
          <div>
            <Boton value={"0"} handleClick={escritura}/>
            <Boton value={"."} handleClick={escritura}/>
            <Boton value={"00"} handleClick={escritura}/>
            <Boton value={"="} handleClick={resultado}/>            
          </div>
        </section>
     </main>
    </>
  )
}

export default App
