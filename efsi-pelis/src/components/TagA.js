import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../Movies.css';

const TagA = ({ nombre, onChangeTagName, filter }) => {
    return (
        <button className="tag" onClick={() => onChangeTagName(filter)}>{nombre}</button>
    );
}

export default TagA;