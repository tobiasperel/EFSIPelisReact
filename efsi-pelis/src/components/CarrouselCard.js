import { React, Component } from 'react';
import Card from './Card';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CarrouselCard extends Component {
    render() {
        return (
            <div className="carrousel-cards mb-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default CarrouselCard;
