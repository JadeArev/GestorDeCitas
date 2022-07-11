import react from 'react';
import React, {useState} from 'react';


function Formulario(){

    function Guardar(props){
    
    



    }

    const [NombreMascota, setNombreMascota] = useState();
    const [NombreDuenio, setNombreDuenio] = useState();
    const [Fecha, setFecha] = useState();
    const [Hora, setHora] = useState();
    const [Sintomas, setSintomas] = useState();
    
    return (

    <div id="root">
        <h1>ADMINISTRADOR DE PACIENTES</h1>
            <div class="container">
            <div class="row">
            <div class="one-half column">
                    <h2>Crear mi Cita</h2>
                    <form onSubmit = {handbleSubmit}/>
                        <label>Nombre Mascota</label>
                            <input type="text" onChange={(e) => setNombreMascota(e.target.value)} name="NombreMascota" class="u-full-width" placeholder="Nombre Mascota"/>
                        <label>Nombre Dueño</label>
                            <input type="text" onChange={(e) => setNombreDuenio(e.target.value)} name="NombreDuenio" class="u-full-width" placeholder="Nombre dueño de la mascota"/>
                        <label>Fecha</label>
                            <input type="date" onChange={(e) => setFecha(e.target.value)} name="Fecha" class="u-full-width"/>
                        <label>hora</label>
                            <input type="time" onChange={(e) => setHora(e.target.value)} name="Hora" class="u-full-width"/>
                        <label>Sintomas</label>
                                    <textarea onChange={(e) => setSintomas(e.target.value)} name="Sintomas" class="u-full-width"></textarea>
                                    <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
                        <form/>
                                </div>

                                </div>

                                </div>

                                </div>
                                          
                                              
        
    
        
    )
}

export default Formulario;