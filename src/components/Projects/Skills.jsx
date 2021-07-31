import React from 'react'

const Skills=()=>{
    const skillsHeadingStyle ={
        textDecoration:'underline'
    }

    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3">
                    <h4 style={skillsHeadingStyle}>Front-end</h4>
                    <ul>
                        <li>Html</li>
                        <li>CSS/CSS3</li>
                        <li>VanillaJs</li>
                        <li>React.Js</li>
                    </ul>

                    <hr className="mt-5"/>

                    <h4>Libraries used</h4>
                    <ul>
                        <li>material-ui/core</li>
                        <li>react-bootstrap</li>
                        <li>react-router-dom</li>
                        <li>react-reveal</li>
                        <li>styled-components</li>
                        <li>axios</li>
                        <li>etc..</li>
                    </ul>
                </div>


                <div className="col-md-3">
                    <h4 style={skillsHeadingStyle} className="my-4 my-md-0">Back-end</h4>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>RESTFUl Api</li>
                        <li>GraphQL - Minimal</li>
                    </ul>

                    <hr className="mt-4"/>

                    <h4>Libraries used</h4>
                    <ul>
                        <li>Authentication -passportjs, passport-local-mongoose</li>
                        <li>express-session</li>
                        <li>body-parser</li>
                        <li>stripe</li>
                        <li>cors</li>
                        <li>Testing -Chai, Mocha</li>
                        <li>etc..</li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <h4 style={skillsHeadingStyle}>DevOps</h4>

                    <ul>
                        <li>Cloudinary- CDN</li>
                        <li>AWS- (S3, EC2, EBS)</li>
                        <li>Firebase</li>
                        <li>NginX, Apache server engine</li>
                        <li>VPS</li>
                        <li>Understanding of SSH etc..</li>
                    </ul>

                </div>

                <div className="col-md-3">
                    <h4 style={skillsHeadingStyle}>Android (JAVA'K)😅</h4>

                    <ul>
                        <li>Architecture -MVVM</li>
                        <li>UI -XML, Jetpack Compose 1.0.0</li>
                        <li>CRUD -Firebase (Firestore)</li>
                        <li>CRUD -Room database, SQLite</li>
                        <li>Retrofit, Picass, Glide, Okhttp</li>
                        <li>Lottie Animation</li>
                        <li>Notifications- FCM</li>
                    </ul>


                </div>
            </div>
            
        </div>
    )
}

export default Skills;
