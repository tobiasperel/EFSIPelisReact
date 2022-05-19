import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const TagA = ({ nombre }) => {
    return (
        <div className="tagBackground">
            <a className="nav-link" href="#">{nombre}</a>
        </div>
    );
}

export default TagA;
