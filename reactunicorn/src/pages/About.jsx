
import '../App.css';
import React from "react";

function About(){
    return(
        <div className="content">
            <h2 className="heading">Über uns</h2>
            <p>Wir sind eine Gruppe von  Informatiker*innen, die 
                in Zusammenarbeit mit dem Chaos Computer Club Hannover 
                junge MINTA*s (Mädchen, Inter, Non-Binär, Trans- und Agender) 
                für das Programmieren begeistern wollen.<br/><br/>
                Da wir selber als FINTA* im Informatikstudium unterrepräsentiert
                 sind, möchten wir mehr Diversität in die Informatik bringen! 
                 Mit unseren Kursen senken wir die Hürde um sich mit Computern 
                 auseinander zu setzen. Hier kann man alle Fragen stellen und 
                 braucht keine Angst vor Neuem haben.<br/><br/></p>
        </div>
    );
}

export default About;