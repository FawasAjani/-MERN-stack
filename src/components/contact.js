//FawasAjani-G00413222
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// Importing FontAwesomeIcon component
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';// Importing the phone and envelope icons
//I got the  font commads from https://docs.fontawesome.com/v5/web/use-with/react
const Contact = () => {
    // State for managing form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State for managing form submission status
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    // Function to handle form data changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setSubmitted(false);
        setSubmitError(false);

        // Simulate form submission delay and response
        try {
            setTimeout(() => {
                setSubmitting(false);
                setSubmitted(true);
                // Reset form fields after submission
                setFormData({ name: '', email: '', message: '' });
            }, 2000);
        } catch (error) {
            //Manage submission errors
            setSubmitting(false);
            setSubmitError(true);
        }
    };

    return (
        <div>
            {/* Section for the Google Maps embed and business information */}
            <section className="custom-section">
                <div className="container">
                    <div className="row">
                        {/* Google Maps iframe for showing location(Westmeath) */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <iframe
                                src="https://maps.google.com/maps?q=Main%20Street,%Westmeath&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                frameBorder="0"
                                style={{ border: 0, width: '100%', height: '400px' }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Location Map">
                            </iframe>
                        </div>
                        {/* Section displaying business details like opening hours and address */}
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h2>Opening Hours</h2>
                            {/* Fawas Beans&Brews Business hours details */}
                            <p>Monday - Friday: 9.00am - 20.00pm</p>
                            <p>Saturday: 9.00am - 23.00pm</p>
                            <p>Sunday: 9.00am - 16.00pm</p>
                            <h2>Find Us</h2>
                            {/* Fawas Beans&Brews address details */}
                            <p>Fawas Beans&Brews,</p>
                            <p>Irish Town</p>
                            <p>Athlone</p>
                            <p>Westmeath</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact form section */}
            <section className="custom-section form-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Contact</h2>
                            {/* Icons and contact information */}
                            <FontAwesomeIcon icon={faPhone} className="fontawesome-icons" aria-hidden="true" />
                            <span className="contact-number">(032) 987 6543</span>
                            <FontAwesomeIcon icon={faEnvelope} className="fontawesome-icons" aria-hidden="true" />
                            <span className="contact-email"><a href="mailto:Fawas Beans&Brews@yahoo.com">Fawas Beans&Brews@yahoo.com</a></span>   {/* Email-Fawas Beans&Brews@yahoo.com */}
                        </div>
                    </div>
                    <br />
                    {/* Contact form for user inputs */}
                    <form onSubmit={handleSubmit}>
                        <div className="row contact-form-text">
                            {/* Name input field */}
                            <div className="col-12 col-sm-6">
                                <label htmlFor="your-name" className="contact-form-text">Your Name</label>
                                <input type="text" id="your-name" className="form-control" required />
                            </div>
                            {/* Email input field */}
                            <div className="col-12 col-sm-6">
                                <label htmlFor="email" className="contact-form-text">Your Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            {/* Message textarea field */}
                            <div className="col-12">
                                <label htmlFor="form-message" className="contact-form-text">What can we help you with?</label>
                                <textarea className="form-control" id="form-message" rows="3" required></textarea>
                            </div>
                            {/* Submit button and status messages */}
                            <div className="col-12">
                                <button type="submit" className="btn btn-light float-right" id="contact-btn-form">
                                    Submit {submitting ? 'Sending...' : ''}
                                </button>
                                {submitted && !submitError && <p className="success-message">Email sent successfully!</p>}
                                {submitError && <p className="error-message">There was an error sending the email.</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;//export default contact

