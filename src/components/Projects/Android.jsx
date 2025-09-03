import React from 'react';
import './Projects.css'

const Android = () => {
    return (
        <>
           <div className="col-md-12 bg-Android">
                <h2 className="text-center my-5 my-md-0">Android engineering.</h2>
                
                <div className="row py-3 px-1">
                    <div className="col-md-3">
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.asseco">
                        <small>2019</small>
                            <div className="card text-center my-4 my-md-0">
                                <p className="text-center">AMB</p>
                                <img className="amb-app-img" src="https://play-lh.googleusercontent.com/8cgBila4mjN4cPzvI6wjzXAYJI7YTSFt_7d6FoSyBdJmXZisc2GtSTFJxA6UVb7ranuS=s360-rw" alt=""/>
                            </div>
                        </a> 
                    </div>

                    <div className="col-md-3 ml-auto">
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.fintech.eazifunds">
                        <small>2019</small>
                            <div className="card justify-content-center">
                                <p className="text-center">Fundbridge</p>
                                <img src="" alt=""/>
                            </div>
                        </a>
                    </div>

                     <div className="col-md-3">
                        {/* https://play.google.com/store/apps/details?id=com.ltd_immersia_datenight */}
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.datenight_immersia_ltd">
                        <small className="">2020-present</small>
                            <div id="datenight-card" className="card bottom-left-card justify-content-center mt-1">
                                <p className="text-center">DateNight</p>
                                <img className="app-img" src="https://res.cloudinary.com/www-softroniiks-com/image/upload/v1627727465/Group_qtaoie.svg" alt=""/>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-3 ml-auto">
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.softroniiks.digid">
                        <small className="mb-2">2019-present</small>
                            <div className="card bottom-right-card justify-content-center" style={{backgroundColor:'#231C79'}}>
                                <p className="text-center text-white">Digid</p>
                                <img className="app-img" src="https://res.cloudinary.com/www-softroniiks-com/image/upload/v1627727784/Component_3_z5jw9q.svg" alt=""/>
                            </div>
                        </a> 
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.afrowatch.android">
                        <small className="mb-2">2023-present</small>
                            <div className="card justify-content-center" style={{backgroundColor:'#2D132C'}}>
                                <p className="text-center text-white">Afrowatch</p>
                                <img className="app-img" src="https://res.cloudinary.com/www-softroniiks-com/image/upload/v1618744943/AfroWatch/Afrowatch-Logo--Vertical-White-font_h6sxho.png" alt="" />
                            </div>
                        </a> 
                    </div>
                </div>
            </div>

            <div className="my-5">
                <p className="text-center">I find solace in android engineering.<br/>I have worked on several android projects<br/> varying from fintech to social media,<br/> automobile and geographical applications</p>

                <p className="text-center">I've released some into production both from my work experience and personal endeavors and i have a couple in alpha and beta stages.</p>
            </div>
        </>
    );
};

export default Android;