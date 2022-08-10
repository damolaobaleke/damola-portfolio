import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Slide} from '@material-ui/core'
import {Fade, Zoom} from 'react-reveal'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProjectHeading from '../animations/ProjectHeadinAnimation'
import Gear from '../animations/GearAnimation';
import Skills from '../Projects/Skills';
import './Projects.css'

const Projects=(props)=>{
    const[initialHeadingState, setHeading]=  useState({h1:["P","r","o","j","e","c","t","s"] })
    const[prevState, setState] = useState({isMore:false, url:'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=0&enablejsapi=1', isMusic:true, buttonText:'Pause music'})

    useEffect(()=>{
        animateHeading()
    })

    const firstFour = initialHeadingState.h1.slice(0,4)
    const lastFour= initialHeadingState.h1.slice(4,8)

    const animateHeading=()=>{
        console.log(firstFour)
        console.log(lastFour)

        firstFour.map((char)=>{
            console.log(char)
            return <Slide direction="left"><div>{char}</div></Slide>
        })
        
    }

    const stopMusic=()=>{
        if(prevState.isMusic){
            setState({...prevState, isMusic:false, url:"", buttonText:'Play music'})
        }else{
            setState({...prevState, isMusic:true,url:"https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=0&enablejsapi=1",  buttonText:'Pause music'})
        }
    }


    return(
        <div>
            <NavBar/>
            <div className="container-fluid">

                <div className="row mt-3">
                    <div className="col-md-12">
                        <h1 className="text-center"><ProjectHeading/></h1>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-12">
                        <span className="text-center">
                            <button className="play-btn" style={{outline:'none', background:'white',border:'black solid 1px', color:'black', borderRadius:'5px'}} onClick={stopMusic}>{prevState.buttonText}</button>
                        </span>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 bg-Web text-md-center">
                        <h4 className="text-center pb-3">Fullstack engineering.</h4>
                        
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li className="web-projects-list py-2">
                                        <svg className="gear-one" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=""><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                        <a className="ml-2 web-project-link" target="_blank" rel="noreferrer" href="https://fundbridge.softroniiks.com">Fundbridge</a>
                                    </li>

                                    <li className="web-projects-list py-2">
                                        <svg className="gear-one" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=""><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                        <a className="ml-2 web-project-link" target="_blank" rel="noreferrer" href="https://quickpay.softroniiks.com">QuickPay</a>
                                    </li>

                                    <li className="web-projects-list py-2">
                                        <svg className="gear-one" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=""><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                        <a className="ml-2 web-project-link" target="_blank" rel="noreferrer" href="https://immersia.co.uk">Immersia</a>
                                    </li>
                                </ul>    
                            </div>

                            <div className="col-md-4">
                                <ul>
                                    <li className="web-projects-list py-2">
                                        <svg className="gear-two" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=""><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                        <a className="ml-2 web-project-link" target="_blank" rel="noreferrer" href="https://apifb.softroniiks.com">Api -fundbridge</a>
                                    </li>

                                    <li className="web-projects-list py-2">
                                        <svg className="gear-two" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=""><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                        <a className="ml-2 web-project-link" target="_blank" rel="noreferrer" href="https://api.immersia.co.uk">Api -Immersia</a>
                                    </li>


                                    <li className="web-projects-list py-2">
                                        <svg className="gear-two" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=""><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                        <a className="ml-2 web-project-link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=RPL6TdqcXQI">SmartSky</a>
                                    </li>
                                </ul>
                            </div>
                        
                            <div className="col-md-4">
                                <ul>
                                    <li className="web-projects-list py-2">
                                        <svg className="gear-two" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=""><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                        <a className="ml-2 web-project-link" target="_blank" rel="noreferrer" href="https://buycoinschallenge-damolao.softroniiks.com">Github- lookalike</a>
                                    </li>

                                    <li className="web-projects-list py-2">
                                        <svg className="gear-two" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox=""><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
                                        <a className="ml-2 web-project-link" target="_blank" rel="noreferrer" href="https://moni-city.com">Monicity</a>
                                    </li>
                                </ul>
                            </div>

                        </div>


                    </div>

                    <div className="col-md-6 bg-Android">
                    <h4 className="text-center my-5 my-md-0">Android engineering.</h4>
                        <div className="row py-3 px-1">
                            <div className="col-md-3">
                                <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.asseco">
                                <small>2019</small>
                                    <div className="card top-left-card justify-content-center my-4 my-md-0">
                                        <p className="text-center">AMB</p>
                                        <img className="amb-app-img" src="https://play-lh.googleusercontent.com/8cgBila4mjN4cPzvI6wjzXAYJI7YTSFt_7d6FoSyBdJmXZisc2GtSTFJxA6UVb7ranuS=s360-rw" alt=""/>
                                    </div>
                                </a> 
                            </div>

                            <div className="col-md-3 ml-auto">
                                <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.fintech.eazifunds">
                                <small>2019</small>
                                    <div className="card top-right-card justify-content-center">
                                        <p className="text-center">Fundbridge</p>
                                        <img src="" alt=""/>
                                    </div>
                                </a>
                            </div>

                            <div className="my-5">
                                <p className="text-center">I find solace in android engineering.<br/>I have worked on several android projects<br/> varying from fintech to social media,<br/> automobile and geographical applications</p>

                                <p className="text-center">I've released some into production both from my work experience and personal endeavors and i have a couple in alpha and beta stages.</p>
                            </div>

                            <Zoom bottom {...(true ? { timeout: 1500 } : {})}>
                                <div className="col-md-3">
                                    <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.ltd_immersia_datenight">
                                    <small className="">2020-pres</small>
                                        <div id="datenight-card" className="card bottom-left-card justify-content-center mt-1">
                                            <p className="text-center">DateNight</p>
                                            <img className="app-img" src="https://res.cloudinary.com/www-softroniiks-com/image/upload/v1627727465/Group_qtaoie.svg" alt=""/>
                                        </div>
                                    </a>
                                </div>

                            
                                <div className="col-md-3 ml-auto">
                                    <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.softroniiks.digid">
                                    <small className="mb-2">2019</small>
                                        <div className="card bottom-right-card justify-content-center">
                                            <p className="text-center">Digid</p>
                                            <img className="app-img" src="https://res.cloudinary.com/www-softroniiks-com/image/upload/v1627727784/Component_3_z5jw9q.svg" alt=""/>
                                        </div>
                                    </a> 
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </div>


                <div className="row mt-4 justify-content-center">
                    {/* Skills */}
                    <div className="col-md-12">
                        <h4 className="py-1 py-md-3 text-center">Skills</h4>
                    </div>
                    <Skills/>
                </div>
                
                <div className="row">
                   {prevState.isMusic ? <iframe width="0" height="0" src={prevState.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> : null}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Projects;