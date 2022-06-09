import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import TagA from './TagA'


const Tagbar = ({ onChangeTagName, nameTag, filtros }) => {
    return (
        <div className="d-flex flex-row ml-3 my-3 ">
            <h3 className='title-type'>{nameTag}</h3>
            <nav className="nav">
                {filtros.map(
                    function(filtro){
                        let nombre = filtro.split("_")
                        let superNombre = ""
                        nombre.map(
                            function(nombrecito){
                                superNombre += nombrecito + " "
                            }
                        )
                        let primeraLetra = superNombre.charAt(0).toUpperCase()
                        superNombre = primeraLetra + superNombre.slice(1)
                        return(
                            <TagA nombre={superNombre} onChangeTagName={onChangeTagName} filter={filtro} />
                        )
                    }
                )}
            </nav>
        </div>
    )
}

export default Tagbar;
