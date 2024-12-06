
//FawasAjani-G00413222
import React from 'react';
import '../App.css';
import fawasImage from '../images/fawas-image.jpg'
import coffeeBeansImage from '../images/beans.jpg';
import coffeeShopImage1 from '../images/coffee1.jpg';
import coffeeShopImage2 from '../images/coffee2.jpg';
import coffeeShopImage3 from '../images/coffee3.jpg';
import coffeeShopImage4 from '../images/coffee4.jpg';
import { Link } from 'react-router-dom';


function Content() {
    return (
        <div>
            <section style={{ backgroundImage: `url(${fawasImage})` }} className="fawas-image container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="hero-text col-xs-12 col-sm-6 col-md-6 col-lg-4 offset-lg-1">
                            <h1 id="hero-h1">Fawas Beans&Brews</h1>
                            {/* Coffee database holder */}
                            <div id="coffee-to-go-nav-link"></div>
                            
                            {/* button for coffee */}
                            <Link to="/read" className="btn btn-light" id="hero-button">
                                Check Our Coffee
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="background-colour custom-section">
                <section>
                    <div className="container">
                        <h2>Drive-Thru</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <p>
                                We're excited to launch our new 'Drive-Thru' service in Westmeath, offering a wide variety of premium coffees, all ready for takeaway. To celebrate, we're giving away 10 free coffees and 10 free paninis to 10 lucky customers!Plus, be sure to try our limited-time seasonal favorite – the Caramel Hazelnut Mocha!
                                </p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <p>
                                At Fawas Beans&Brews, we pride ourselves on being the best coffee spot in Ireland. Our expert baristas craft every coffee using the finest quality beans, delivering the same rich and delightful flavors as our in-store brews. These premium coffee beans are rich in antioxidants, helping to protect your body from harmful free radicals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Start Four Icons section */}
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-coffee my-icon" aria-hidden="true"></span>
                                <p>
                                    <strong>Eco-friendly <br />Coffee Beans</strong> {/*Eco-friendly beans */}
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-user my-icon" aria-hidden="true"></span>
                                <p>
                                    <strong>Craft<br />Brewing</strong>
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa-solid fa-wifi my-icon" aria-hidden="true"></span>
                                <p>
                                    <strong>WiFi(5g) and<br />Workspaces</strong> {/*Wifi and workspaces */}
                                </p>
                            </div>
                            <div className="col-6 col-lg-3 four-icons zoom">
                                <span className="fa fa-map-marker my-icon" aria-hidden="true"></span>
                                {/* Bean Points nav link */}
                                <div id="bean-points-nav-link"></div>
                                <p>
                                    <strong>Public<br />Events</strong> {/*Public Events  */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End background color box around 'Coffee to Go' and 'Four Icons' sections */}
            </div>
            <div className="custom-section white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={coffeeBeansImage} className="img-fluid" alt="Coffee beans" />
                        </div>
                        <div className="col-md-6">
                            <h2>Bean Rewards Program</h2>
                            <p>
                                At Fawas Beans&Brews, we value your loyalty, and our Bean Rewards Program is our way of saying thank you!
                            </p>
                            <p>
                                For every coffee you enjoy with us, you'll earn 2 Bean Points. Once you've collected 12 Bean Points (equivalent to 6 coffees), you'll unlock a <strong>complimentary coffee</strong> of your choice. Getting started is simple:
                            </p>
                            <ol>
                                <li>Request a Bean Rewards card during your next visit</li>
                                <li>Receive a stamp on your card for every coffee purchase</li>
                                <li>Witness your Bean Points accumulate</li>
                                <li>Claim your free coffee once you've reached 12 points</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-section background-colour">
                <div className="container">
                    <div className="row">
                        <article className="col-12 col-sm-6">
                            <h2>About</h2>
                            <p>
                            Welcome to Fawas Beans & Brews, where every cup is a work of art and flavor is our masterpiece. Situated in the heart of Westmeath, home to the passionate Gaelic football community, we are your go-to destination for extraordinary coffee experiences.
                            </p>
                            <p>
                            At Fawas Beans & Brews, our baristas are masters of craft brewing, carefully selecting only the finest coffee beans for their rich flavor and quality. Every cup we serve is a testament to our passion for creating the perfect brew.
                            </p>
                            <p>
                            We source our premium coffee beans from Ethiopia and Colombia, renowned for producing the best coffee beans in the world. These regions are known for their rich, unique flavor profiles, which we bring to every brew.  Explore the world of coffee with us and discover your new favorite brew.
                            </p>

                        </article>
                        <div className="col-6 col-sm-3 about-column">
                            <img src={coffeeShopImage1} className="img-fluid" alt="Waiter holding coffee in hands" />
                            <img src={coffeeShopImage2} className="img-fluid" alt="Coffee and pastries on wooden table" />
                        </div>
                        <div className="col-6 col-sm-3 about-column">
                            <img src={coffeeShopImage3} className="img-fluid" alt="Three hands holding coffee cups together" />
                            <img src={coffeeShopImage4} className="img-fluid" alt="Coffee machine" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;//export default content
//FawasAjani-G00413222