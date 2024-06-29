import React from "react";
import '../styles/Contact.scss';
import location from '../images/location.png';
import Decoration4 from '../images/png4.png';
import mail from '../images/mail.png';

function Contact() {
    return (
        <>
            <section className="contact" id="contact">
                <img src={Decoration4} alt="" className="decor3"/>
                <div className="contact-text">
                    <h1>Contact</h1>
                    <h2>Let's get in touch! 👇</h2>
                </div>
                <div className="contact-img">
                    <div>
                        <img src={location} alt="" />
                        <h3>
                            Location<br/>
                        </h3>
                        <p>
                            Győr, Hungary 📍
                        </p>
                    </div>
                    <div>
                        <img src={mail} alt="" />
                        <h3>
                            Mail<br/>
                        </h3>
                        <p>
                            <a href="mailto:gerencser.oliver01@gmail.com">gerencser.oliver01@gmail.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;