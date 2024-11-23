
import '../App.css';
import React from "react";

function Home(){
    return(
        <div className="content">
            <h2 className="heading">Willkommen bei den Unicorns!</h2>
            <p>Du willst programmieren lernen? Hast Lust, dein eigenes Spiel zu entwickeln? 
            Oder willst einfach mal gucken, was Informatik überhaupt ist und ob du dich dafür interessierst?</p>

            <p>Wir bieten Programmierkurse für MINTA* (Mädchen, Inter, Non-Binär, Trans- und Agender) ab 13 Jahren an, 
            für die du kein Vorwissen brauchst! Der aktuelle Kurs (Start am 10. Oktober 2024) wird für erwachsene FINTA*-Personen geöffnet. 
            Falls du Kinder bis 10 Jahre hast und keine Betreuung findest, kannst du sie gerne zum Kurs mitbringen. 
            Gemeinsam schauen wir uns zunächst Grundlagen an, sodass du selbstsicher mit einem Computer umgehen kannst! 
            Wir treffen uns jeden Donnerstag um 18.00-19.30.</p>

            <p>Unsere Projekte finden in Kooperation mit der Bürgerschule Stadtteilzentrum Nordstadt und dem Chaos Computer Club Hannover statt.</p>

            <div className="image-container">
                <a href="https://www.stadtteil-zentrum-nordstadt.de/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../img/BueSchuWeiß_auf_nichts.png")} alt="Bürgerschule" className="centered-image" />
                </a>
            </div>
        </div>
    );
}

export default Home;