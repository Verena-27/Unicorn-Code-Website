
import '../App.css';
import React from "react";

function About(){

    const infoEmail = process.env.REACT_APP_INFO_EMAIL;
    console.log("Test", process.env.REACT_APP_TEST);

    return(
        <div>
            <h2 className="heading">Über uns</h2>
            <p>
                Wir sind eine Gruppe von  Informatiker*innen, die in Zusammenarbeit mit dem Chaos Computer Club Hannover junge 
                MINTA*s (Mädchen, Inter, Non-Binär, Trans- und Agender) für das Programmieren begeistern wollen.<br/>
                Da wir selber als FINTA* im Informatikstudium unterrepräsentiert sind, möchten wir mehr Diversität in die Informatik bringen! 
                Mit unseren Kursen senken wir die Hürde um sich mit Computern auseinander zu setzen. 
                Hier kann man alle Fragen stellen und braucht keine Angst vor Neuem haben.<br/><br/>
                Wir bieten wöchentliche Kurstreffen an, dort nehmen wir uns mit einer fortlaufenden Gruppe ein größeres Projekt vor und programmieren das zusammen. 
                Hier entsteht am Ende des Kurses meistens ein kleines Spiel. Ein Einstieg ist jederzeit möglich.<br/>
                Die aktuellen Termine findet ihr unter dem Abschnitt Programm.<br/><br/> 
                Alle unsere Angebote richten sich an MINTA*s ab 13 Jahren ohne Vorkenntnisse. Aktuell ist der Kurs ebenso für Erwachsene geöffnet.<br/>
                Laptops können selber mitgebracht werden, falls keiner vorhanden ist, stellen wir euch gerne einen zur Verfügung. 
                Alle Kurse sind kostenlos!<br/><br/> Bei Fragen schreibt uns gerne an{' '} 
                <a href={`mailto:${infoEmail}`}>{infoEmail}</a>, wir freuen uns auf euch!
            </p>
        </div>
    );
}

export default About;