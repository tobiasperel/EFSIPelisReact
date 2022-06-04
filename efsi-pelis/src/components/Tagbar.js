import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import TagA from './TagA'


const Tagbar = ({ onChangeTagName, nameTag }) => {
    return (
        <div className="d-flex flex-row ml-3 my-3 ">
            <h3 className='title-type'>{nameTag}</h3>
            <nav className="nav">
                <TagA nombre="Populares" onChangeTagName={onChangeTagName} filter="popular" />
                <TagA nombre= "En emision" onChangeTagName={onChangeTagName} filter="now_playing"/>
                <TagA nombre="Proximamente" onChangeTagName={onChangeTagName} filter="upcoming" />
            </nav>
        </div>
    )
}

export default Tagbar;
