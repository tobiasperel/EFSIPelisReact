import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SearchBar = ({ dataSearch, onChange }) => {

    
    return (
        <div className="d-flex justify-content-center h-100 mb-2">
            <div className="search">
                <input value={dataSearch} type="text" className="search-input" onChange={e => onChange(e)} placeholder="Buscar..." name="" />
                <a href="#" className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default SearchBar;
