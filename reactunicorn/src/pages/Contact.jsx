

import '../App.css';
import React from "react";

function Contact(){

 // Email for general inquiries
 var generalInquiryUser = "info";
 var generalInquiryDomain = "unicornsco.de";
 var generalInquiryEmail = generalInquiryUser + "@" + generalInquiryDomain;


    return(
        <>
        <div className='content'>
        	<h2>Kontakt</h2>
            <p>
                Ihr könnt uns allgemein per Mail unter {' '} <a href={`mailto:${generalInquiryEmail}`}>{generalInquiryEmail}</a> erreichen.<br/>
                Unsere Kurse finden jeweils hier statt:<br/><br/> Chaos Computer Club Hannover e.V.<br/>
                Stadtteilzentrum Nordstadt Bürgerschule e.V.<br/> Klaus-Müller-Kilian-Weg 2 <br/> 30167 Hannover<br/><br/>
                Copyright &copy UnicornsCode<br/><br/> Besuche uns auch auf Instagram!                
            </p>
            <div className="image-container-insta">
                <a href="https://www.instagram.com/unicornscode.hannover?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                    <img src={require("../img/instagram.png")} alt="Instagram UnicornsCode" className="centered-image-insta" />
                </a>
            </div>
        </div>
        
        </>
    )
}

export default Contact;