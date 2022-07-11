import React from "react";
import React, { useState } from "react";

function Cita(props){


    return (

        <>
        
        <div class="one-half column">
        
            <h2>Administra tus citas</h2>
             <div class="cita">
             <p>Mascota: <span>{props.NombreMascota}</span>
          </p>
            <p>Dueño: 
               <span>{props.NombreDuenio}</span>
             </p>
             <p>Fecha: 
             <span>{props.Fecha}</span>
            </p>
                                                        
            <p>Hora: <span>{props.Hora}</span>
           </p>
         <p>Sintomas: 
         <span>{props.Sintomas}</span>
         </p>
        <button class="button elimnar u-full-width">Eliminar ×</button>
        </div></div>       

        </>
    )

}

export default Cita;