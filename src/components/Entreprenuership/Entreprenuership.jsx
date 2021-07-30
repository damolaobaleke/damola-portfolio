import React from 'react';
import {Link} from 'react-router-dom';
import './Entreprenuership.css';
import NavBar from '../NavBar/NavBar';


const Entrepreneurship =()=>{
    return(
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 bg-Immersia">
                        <p className="text-center pt-3">Extensive Reality</p>
                        <a target="_blank" href="https://immersia.co.uk" rel="noreferrer" className="text-center btn btn-primary mt-5 ml-4">Find out more !</a>
                    </div>
        
                    <div className="col-md-6 bg-Softroniiks">
                        <p className="text-center pt-2">Breaking the boundaries of interoperable software and hardware</p>
                        <a target="_blank" className="text-center mt-4 btn btn-primary mt-5 ml-4" href="https://softroniiks.com" rel="noreferrer">Find out more !</a>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col-md-12 bg-Afrowatch">
                        <p className="text-center pt-4">One access streaming platform for all african movies, series and animation</p>
                        <a target="_blank" href="https://afrowatch.co" rel="noreferrer" className="text-center mt-4 btn btn-primary mt-5 ml-5">Find out more !</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entrepreneurship;