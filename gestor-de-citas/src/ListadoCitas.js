import React from "react";
import Cita from './components/Cita';



function ListadoCitas({ListaDeCitas}){

    return (

        <>
        
        <div className="one-half-column">
            <h2>Administra tus citas</h2>

            {
                ListaDeCitas.map(cita => {


                    <Cita nombreMascota = {cita.nombreMascota}
                    nombreDuenio = {cita.nombreDuenio}
                    Fecha = {cita.Fecha}
                    Hora = {cita.Hora}
                    Sintomas = {cita.Sintomas}>
                    </Cita>
                
                })
            }
        </div>
        
        </>
    )


}

export default ListadoCitas;