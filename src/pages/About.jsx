import "../App.css";
import React from "react";

function About() {
  return (
    <div className="main">
      <h2 className="heading">Über uns</h2>
      <p>
        <br />
        Wir von UnicornsCode haben uns vor einigen Jahren im Informatikstudium
        in Hannover kennen gelernt. Seitdem stoßen immer mehr Mitglieder dazu.
        Da wir selber als FINTA* im Informatikstudium unterrepräsentiert waren
        und sind, möchten wir mehr Diversität in die Informatik bringen!
        <br />
        <br />
        Mit unseren Veranstaltungen senken wir die Hürde um sich mit Computern,
        Programmieren und digitalen Rechten auseinander zu setzen. Hier kann man
        alle Fragen stellen und braucht keine Angst vor Neuem haben.
        <br />
        <br />
        Ein weiteres wichtiges Anliegen ist es für uns, eine sichere
        Anlaufstelle für FINTA* zu sein. Wir veranstalten regelmäßige
        Vernetzungstreffen, damit sich FINTA* in Informatik austauschen und
        gegenseitig unterstützen können. Alle unsere Veranstaltungen sind
        kostenlos.
        <br />
        <br />
        <div className="image-text-row">
          <img src="/img/startsocial.jpg" alt="startsocial2025" />

          <div className="text">
            Wir waren 2024/2025 bei{" "}
            <a href="https://startsocial.de/das-war-das-startsocial-jahr-2025">
              startsocial
            </a>{" "}
            dabei! Dabei haben wir tolle Unterstützung von zwei Coaches (
            <a
              href="https://narikahle.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Nari Kahle
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/bahnemann/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Bastian Bahnmann
            </a>
            ) bekommen, die uns bei der Weiterentwicklung unserer Organisation
            geholfen haben. Gemeinsam haben wir den Schwerpunkt auf Vernetzung
            sowie die Förderung durch den Girl’s Day für die nächste Zeit
            festgelegt.
          </div>
        </div>
        <br />
        <br />
        Damit du einen Eindruck von uns bekommst: <br />
        <div className="image-row">
          <img src="/img/tatjana.jpg" alt="Tatjana" />
          <img src="/img/stina.jpg" alt="Stina" />
          <img src="/img/hannah.png" alt="Hannah" />
        </div>
        <div className="image-row">
          <img src="/img/anne.jpg" alt="Anne" />
          <img src="/img/krissi.jpg" alt="Krissi" />
          <img src="/img/nidal.jpg" alt="Nidal" />
        </div>
        <div className="image-row">
          <img src="/img/verena.jpg" alt="Verena" />
          <img src="/img/andriyan.jpg" alt="Andriyan" />
          <img src="/img/lena.jpg" alt="Lena" />
        </div>
      </p>
    </div>
  );
}

export default About;
