import React from 'react';
import "./ChangeAlert.css"
import { useStorageListener } from './useStorageListener';

const ChangeAlert = ({sincronize}) => {
    const {show, toggleShow} = useStorageListener(sincronize);
    
    if(show){
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                <p>¿Deseas sincronizar cambios?</p>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    onClick={()=> toggleShow(false)}
                    >
                    Volver a cargar la informacion
                </button>
                </div>
            </div>
        );
    }else{
        return null;
    }
}
 
export {ChangeAlert};