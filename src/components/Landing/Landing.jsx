import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Fade, Paper, Slide, Zoom, Grow} from '@material-ui/core'
import Navbar from '../NavBar/NavBar';
import './Landing.css';

const LandingPage=()=>{
    const[initialState, setAnimationState] = useState({isAnimated:false})

    useEffect(()=>{
        setAnimationState({...initialState, isAnimated:true})

    },[]);

    return(
        <div className="bg-landingPg">
            <Navbar/>
            <div className="container">
                <div className="justify-content-center row mt-5">

                    <div className="col-md-6">
                        <Slide direction="right" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 1600 } : {})}>
                            <div>
                                <h1 className="headingOne">Who am I ?</h1>
                                <p className="pb-3">Software Engineer and learning entreprenuer</p>
                            </div>
                        </Slide>

                        <Slide direction="right" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 3200 } : {})}>
                            <div>
                                <h1 className="headingOne">What do I do ?</h1>
                                <p className="pb-3">Build software and companies for a living.</p>
                            </div>
                        </Slide>

                        <Slide direction="right" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 4400 } : {})}>
                            <div>
                                <h1 className="headingOne">What's my degree In ?</h1>
                                <p className="pb-3">BEng Electronic and Computer Systems Engineering</p>
                            </div>
                        </Slide>

                        <Slide direction="right" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 5400 } : {})}>
                            <div>
                                <h1 className="headingOne">Where did i get my degree ?</h1>
                                <p className="pb-3"><a className="link" target="_blank" href="https://www.lboro.ac.uk/">Loughborough University, UK</a></p>
                            </div>
                        </Slide>

                        <Slide direction="right" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 6000 } : {})}>
                            <div>
                                <h1 className="headingOne">What challenge am i looking for ?</h1>
                                <p className="pb-3">Software or Hardware</p>
                            </div>
                        </Slide>

                    </div>

                    <div className="col-md-6 text-right">
                        <Slide direction="left" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 1600 } : {})}>
                            <div>
                                <h1 className="headingOne">Certifications ?</h1>
                                <p className="pb-3">Java 1, Java 2, Google:(AAD): Proficient</p>
                            </div>
                        </Slide>

                        <Slide direction="left" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 3200 } : {})}>
                            <div>
                                <h1 className="headingOne">Tech Blog ?</h1>
                                <p className="pb-3"><a className="link" rel="noreferrer" href="#">Coming Soon</a></p>
                            </div>
                        </Slide>

                        <Slide direction="left" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 4400 } : {})}>
                            <div>
                                <h1 className="headingOne">More than Technology ?</h1>
                                <p className="pb-3">Chess, Soccer, Dancing, Gaming, Producing</p>
                            </div>
                        </Slide>

                        <Slide direction="left" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 5400 } : {})}>
                            <div>
                                <h1 className="headingOne">Experience in the Industry ?</h1>
                                <p className="pb-3">2+ Years</p>
                            </div>
                        </Slide>

                        <Slide direction="left" in={initialState.isAnimated} {...(initialState.isAnimated ? { timeout: 6000 } : {})}>
                            <div>
                                <h1 className="headingOne">Where do i currently reside ?</h1>
                                <p className="pb-3">Los Angeles</p>
                            </div>
                        </Slide>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingPage;