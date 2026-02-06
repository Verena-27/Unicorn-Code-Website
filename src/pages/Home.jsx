import "../App.css";
import React from "react";

function Home() {
  return (
    <div className="main">
      <h2 className="heading">Willkommen bei den Unicorns!</h2>
      <p>
        Wir sind UnicornsCode, eine Initiative von Informatiker*innen, die
        FINTA* (Frauen, Inter, Non-Binär, Trans- und Agender) in allen
        Altersstufen für Informatik begeistern wollen und zusammenbringen.
        Zusammen mit dem{" "}
        <a href="https://hannover.ccc.de/">Chaos Computer Club Hannover</a> und
        der{" "}
        <a href="https://www.stadtteil-zentrum-nordstadt.de/">
          Bürgerschule Stadtteilzentrum Nordstadt
        </a>{" "}
        organisieren wir regelmäßig Girl's Days, Vernetzungstreffen und
        Workshops für FINTA* in Hannover.
      </p>
      <p>
        Du willst etwas über Informatik lernen? Andere FINTA* in Informatik
        kennen lernen? Oder willst einfach mal ausprobieren, ob das Universum
        Informatik etwas für dich ist? Dann bist du bei uns genau richtig! Schau
        in unser aktuelles <a href="/dates">Programm</a> rein, um zu sehen, was
        wir anbieten und was ansteht!
      </p>

      <p>
        Du hast eine Idee für eine Veranstaltung oder ein Projekt? Brauchst
        Unterstützung bei der Umsetzung? Oder möchtest bei uns mitmachen? Dann
        melde dich gerne bei uns, wir freuen uns über jede Unterstützung! Hier
        kannst du mit uns <a href="/contact">Kontakt</a> aufnehmen.
      </p>

      <div className="image-row">
        <img src="/img/main-2.JPG" alt="Einhorn-Roboter" />
        <img src="/img/pubquiz25-1.jpg" alt="Pubquiz 2025" />
        <img src="/img/girlsday25-1.jpg" alt="Girl's Day 2025" />
      </div>
    </div>
  );
}

export default Home;
