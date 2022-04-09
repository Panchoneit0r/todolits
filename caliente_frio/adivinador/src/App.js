
import './App.css';
import Game from './game/game';

function App() {
      /*
  let random = Math.floor( Math.random()* 100) + 1;
  console.log(random);
  let respuesta;
  function eo (){
    let numero = document.getElementById("numero").value;

    let diferencia;
    diferencia = Math.abs(numero - random) ;

    if (diferencia === 0) {
      respuesta = "Le atinaste";
      document.getElementById("res").innerHTML = respuesta;
    }
    else if (diferencia > 10) {
      respuesta = "Estas muy lejos de la respuesta correcta";
      document.getElementById("res").innerHTML = respuesta;
    }
    else {
      respuesta = "Estas muy cerca de la respuesta correcta";
      document.getElementById("res").innerHTML = respuesta;
    }
     
  }
  */

  return (
   
    <div className="App">
      <header>
     <h1> Adivinador  </h1>
      
      </header>
      <div>
        <Game/>
      </div>
    </div>
  
   
  );
}

export default App;
