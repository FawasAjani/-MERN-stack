//FawasAjani-G00413222
import React from 'react';
import '../App.css';
import Logo from '../images/Fawaslogo.png';

function Footer() {
    return (
        <footer className="footer custom-section">
            <div className="container">
                <div className="row">
                    {/* Contact Information */}
                    <div className="col-12 col-md-6 contact-footer">
                        <h5>Contact:</h5>
                        <span className="fa fa-phone fontawesome-icons" aria-hidden="true"></span>
                        <span className="contact-number">(032) 987 6543</span>
                        <br />
                        <span className="fa fa-envelope fontawesome-icons" aria-hidden="true"></span>
                        <span className="contact-email" id="footer-email">
                            <a href="mailto:support@yahoo.com">Fawas Beans&Brews@yahoo.com</a>
                            <br />
                        </span>
                        <span className="fa fa-map-marker fontawesome-icons"></span>
                        <span>
                            <strong>Fawas Beans&Brews</strong>
                        </span>
                        <div className="address">
                            Irish Town<br />
                            Athlone<br />
                            Westmeath
                        </div>
                    </div>
                    
                    {/* Social Media and Logo */}
                    <div className="col-12 col-md-6 follow-us">
                        <h5>Follow us:</h5>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook-f social-icon"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram social-icon"></i>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-x social-icon"></i>
                        </a>
                        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-snapchat-ghost social-icon"></i>
                        </a>
                        <br />
                        <a href="/">
                            <img src={Logo} className="logo-footer" alt="Fawaslogo.png" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;//export default Footer;
