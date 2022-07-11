import './App.css';
import React, {useState} from 'react';
import Formulario from './components/Formulario';
import ListadoCitas from './ListadoCitas';

function App() {

  const [ListaDeCitas, setListaDeCitas] = useState([]);
  return (
  
       <div id ="root">
        <div className="container">

        <div className="row">

        <Formulario setListaDeCitas = {setListaDeCitas}></Formulario>
        <ListadoCitas ListaDeCitas = {ListaDeCitas} setListaDeCitas = {setListaDeCitas}></ListadoCitas>
        
        </div>
        </div>
       </div>

    


    
  );
}

export default App;
