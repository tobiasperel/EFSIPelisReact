import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Movies.css';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white mt-5 footer">
        <div className="container p-4 pb-0">
            <section className="p-3 pt-0">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8 text-center text-md-start">
                        <div className="p-3">
                            © 2020 Copyright: 
                            <a className="text-white" target="_blank" href="https://www.youtube.com/watch?v=3PGyXr1ux20"> Sebastian Biorci & TobiasPerel</a>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            role="button"><i className="fab fa-facebook-f"></i></a>
            
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            role="button"><i className="fab fa-twitter"></i></a>
            
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            role="button" ><i className="fab fa-google"></i></a>
            
                        <a
                            className="btn btn-outline-light btn-floating m-1"
                            role="button" ><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </section>
        </div>
        </footer>
    )
}

export default Footer