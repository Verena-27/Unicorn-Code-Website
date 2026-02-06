import "../App.css";
import React from "react";

function Contact() {
  return (
    <div className="main">
      <h2>Kontakt</h2>
      <p>
        Ihr könnt uns allgemein per Mail unter{" "}
        <a href={`mailto:info@unicornsco.de`}>info@unicornsco.de</a> erreichen.
        <br />
        Unsere Kurse finden jeweils hier statt:
        <br />
        <br />{" "}
        <a href="https://hannover.ccc.de/">Chaos Computer Club Hannover e.V.</a>
        <br />
        <a href="https://www.stadtteil-zentrum-nordstadt.de/">
          {" "}
          Bürgerschule Stadtteilzentrum Nordstadt e.V.
        </a>
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
        <a
          href="https://chaos.social/@UnicornsCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/fediverse.png"
            alt="Mastodon"
            style={{ width: "60px", height: "60px", verticalAlign: "middle" }}
          />
        </a>
      </p>
    </div>
  );
}

export default Contact;
