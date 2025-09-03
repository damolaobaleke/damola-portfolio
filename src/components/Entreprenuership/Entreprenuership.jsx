import React from 'react';
import {Link} from 'react-router-dom';
import './Entreprenuership.css';
import NavBar from '../NavBar/NavBar';


const Entrepreneurship =()=>{
    return(
        <div>
            <NavBar/>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 bg-Immersia">
                        <p className="text-center pt-3">Extensive Reality</p>
                        <a target="_blank" href="https://immersia.co.uk" rel="noreferrer" className="text-center btn btn-primary mt-5">Find out more !</a>
                    </div>
        
                    <div className="col-md-6 bg-Softroniiks">
                        <p className="text-center pt-2">Breaking the boundaries of interoperable software and hardware</p>
                        <a target="_blank" className="text-center mt-4 btn btn-primary mt-5" href="https://softroniiks.com" rel="noreferrer">Find out more !</a>
                    </div>
                </div>
        
                <div className='bg-Afrowatch'>
                    <p style={{fontSize:'18px'}}  className="text-center pt-md-4 pt-5">One access streaming platform for Black and African animation in African languages</p>
                    
                    <div className="row text-center">
                        <div className="col-md-4">
                            <p style={{fontSize:'20px'}} className="text-center pt-md-4 pt-5">Web</p>
                            <a target="_blank" href="https://afrowatch.co" rel="noreferrer" className="text-center mt-4 btn btn-info my-2 mb-2">Find out more !</a>
                        </div>
                        <div className="col-md-4">
                            <p style={{fontSize:'20px'}} className="text-center pt-md-4 pt-5">Android</p>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.afrowatch.android" rel="noreferrer" className="text-center mt-4 btn btn-success my-2 mb-2">Find out more !</a>
                        </div>
                        <div className="col-md-4">
                            <p style={{fontSize:'20px'}} className="text-center pt-md-4 pt-5">iOS</p>
                            <a target="_blank" href="https://testflight.apple.com/join/dHhPKSr6" rel="noreferrer" className="border-0 text-center mt-4 btn btn-primary my-2 mb-2" style={{color:'black', background:'white', outline:'none'}}>Find out more !</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entrepreneurship;