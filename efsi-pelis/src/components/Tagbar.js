import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import TagA from './TagA'


const Tagbar = ({ onChangeTagName }) => {
    return (
        <div className="d-flex flex-row ml-3 my-3 ">
            <h3>Popular</h3>
            <nav className="nav">
                <TagA nombre="Streaming" onChangeTagName={onChangeTagName} filter="popular" />
                <TagA nombre="Pere" onChangeTagName={onChangeTagName} filter="now_playing"/>
                <TagA nombre="TV" onChangeTagName={onChangeTagName} filter="upcoming" />
            </nav>
        </div>
    )
}

export default Tagbar;
