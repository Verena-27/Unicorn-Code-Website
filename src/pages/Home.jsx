import "../App.css";
import React from "react";

function Home() {
  return (
    <div className="main">
      <h2 className="heading">Willkommen bei den Unicorns!</h2>
      <p>
        Du willst programmieren lernen? Hast Lust, dein eigenes Spiel zu
        entwickeln? Oder willst einfach mal gucken, was Informatik überhaupt ist
        und ob du dich dafür interessierst?
      </p>

      <p>
        Wir bieten Programmierkurse für MINTA* (Mädchen, Inter, Non-Binär,
        Trans- und Agender) von 13-16 Jahren an, für die du kein Vorwissen
        brauchst! Gemeinsam schauen wir uns zunächst Grundlagen an, sodass du
        selbstsicher mit einem Computer umgehen kannst!
      </p>

      <p>
        Unsere Projekte finden in Kooperation mit der Bürgerschule
        Stadtteilzentrum Nordstadt und dem Chaos Computer Club Hannover statt.
        Der im Sommer 2023 startende wöchentliche Kurs wird von der
        Bürgerstiftung Hannover gefördert.
      </p>

      <div className="image-row">
        <img src="/img/main-2.jpg" alt="Einhorn-Roboter" />
        <img src="/img/pubquiz25-1.jpg" alt="Pubquiz 2025" />
        <img src="/img/girlsday25-1.jpg" alt="Girl's Day 2025" />
      </div>
    </div>
  );
}

export default Home;
