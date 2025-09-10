import "../App.css";
import React from "react";

function Contact() {
  // Email for general inquiries
  const generalInquiryUser = "info";
  const generalInquiryDomain = "unicornsco.de";
  const generalInquiryEmail = generalInquiryUser + "@" + generalInquiryDomain;

  return (
    <div className="main">
      <h2>Kontakt</h2>
      <p>
        Ihr könnt uns allgemein per Mail unter{" "}
        <a href={`mailto:${generalInquiryEmail}`}>{generalInquiryEmail}</a>{" "}
        erreichen.
        <br />
        Unsere Kurse finden jeweils hier statt:
        <br />
        <br /> Chaos Computer Club Hannover e.V.
        <br />
        Stadtteilzentrum Nordstadt Bürgerschule e.V.
        <br /> Klaus-Müller-Kilian-Weg 2 <br /> 30167 Hannover
        <br />
        <br />
        <span>&copy; UnicornsCode</span>
        <br />
        <br />
        Besuche uns auch auf{" "}
        <a
          href="https://www.instagram.com/unicornscode.hannover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/instagram.png"
            alt="Instagram"
            style={{ width: "60px", height: "60px", verticalAlign: "middle" }}
          />
        </a>
      </p>
    </div>
  );
}

export default Contact;
