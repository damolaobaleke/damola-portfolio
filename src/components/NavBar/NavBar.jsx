import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {} from '@material-ui/core';
import micron from 'webkul-micron';
import './NavBar.css';


const NavBar=(props)=>{

    const AnimateOne=()=>{
        micron.getEle("#nav-link-one").interaction("bounce").duration(".5").timing("ease-in-out");
    }

    const AnimateTwo=()=>{
        micron.getEle("#nav-link-two").interaction("bounce").duration(".5").timing("ease-in-out");
    }

    return(
        <nav class="navbar navbar-expand-lg bg-transaparent py-3">
            <Link class="navbar-brand" to="/">Damola O</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fas fa-bars" style={{color: '#283990'}} aria-hidden="true"></i></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-3">
                        <Link id="nav-link-one" onMouseEnter={AnimateOne} class="nav-link" to="/projects">Projects</Link>
                    </li>
    
                    <li class="nav-item mx-3">
                        <Link id="nav-link-two" onMouseEnter={AnimateTwo} class="nav-link" to="/entrepreneurship">Entrepreneurship</Link>
                    </li>
    
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;