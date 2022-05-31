import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const TagA = ({ nombre, onChangeTagName, filter }) => {
    return (
        <div className="tagBackground">
            <button className="nav-link" onClick={() => onChangeTagName(filter)}>{nombre}</button>
        </div>
    );
}

export default TagA;