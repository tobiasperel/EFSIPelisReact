import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import TagA from './TagA'

class Tagbar extends Component {
    render() {
        return (
            <div className="d-flex flex-row ml-3 my-3 ">
          <h3>Popular</h3>
          <nav className="nav">
              <TagA nombre="Streaming"/>
              <TagA nombre="Pere"/>
              <TagA nombre="TV"/>
              <TagA nombre="NOSE"/>
          </nav>
      </div>
        );
    }
}

export default Tagbar;
