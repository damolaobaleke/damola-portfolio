import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer=(props)=>{
    return(
        <div className="footer py-5">
            <div className="container">
                <div className="row justify-content-center text-left text-md-center">
                    <div className="col-md-4">
                        <ul>
                            <li className="py-3"><a target="_blank" rel="noreferrer" href="http://github.com/damolaobaleke"><img className="footer-logo" src="https://res.cloudinary.com/www-softroniiks-com/image/upload/v1621700316/github-logo-5F384D0265-seeklogo.com_pfxk5d.png" alt="github"/></a></li>
                        </ul>

                    </div>

                    <div className="col-md-4">
                        <ul>
                            <li className="pt-4"><a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/8537792/damola-obaleke"><img className="footer-logo" src="https://res.cloudinary.com/www-softroniiks-com/image/upload/v1627666727/768px-Stack_Overflow_icon.svg_gn7nt6.png" alt="stackoverflow"/></a></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <ul>
                            <li className="pt-4"><a href="mailto:damolaobaleke@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <p className="my-5 mt-md-4 text-center">Copyright&#169; - Damola Obaleke</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;