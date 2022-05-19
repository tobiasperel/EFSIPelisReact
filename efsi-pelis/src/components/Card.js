import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Card extends Component {
    render() {
        return (
            <div className="card" id="card">
                <img src="https://pbs.twimg.com/media/FCrLQY7WQAQksoW?format=jpg&name=900x900" className="card-img-top"
                    alt="..."/>
                <div className="card-body">
                    <h5>Titulo, El sapo</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                </div>
            </div>
        );
    }
}

export default Card;
