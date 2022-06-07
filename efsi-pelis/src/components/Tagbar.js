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
                        nombre.map(
                            function(nombrecito){
                            
                            }
                        )
                        nombre = nombre[0] +" "+ nombre[1]
                        console.log(nombre);
                        return(
                            <TagA nombre={filtro.toUpperCase()} onChangeTagName={onChangeTagName} filter={filtro} />
                        )
                    }
                )}
            </nav>
        </div>
    )
}

export default Tagbar;
