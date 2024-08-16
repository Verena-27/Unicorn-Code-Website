import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css';

function Dates(){

    return(
        <div className='content'>
            <h2>Programm</h2>

        Für unseren aktuellen Kurs benötigst du absolut keine Vorkenntnisse. Falls du bisher noch nichts mit Informatik zu tun hattest, kannst du hier raus finden, ob es überhaupt etwas für dich ist.
        Wir haben keinen festen Stundenplan (eher einzelne Module) für den Kurs und richten uns nach dir, was dich interessiert und was du lernen möchtest! Bei uns brauchst du keine Angst haben, Fragen zu stellen oder Fehler zu machen.
        Du kannst gerne deinen eigenen Laptop mitbringen oder dir von uns einen leihen. 
        <Accordion data-bs-theme="dark" className='accordion-custom'>
            <Accordion.Item eventKey="course">
                <Accordion.Header>Laufender Kurs donnerstags 18.00-19.30 Uhr</Accordion.Header>
                <Accordion.Body>
                    Der aktuelle Kurs zum Programmieren lernen findet in der Bürgerschule Stadtteilzentrum Nordstadt statt (in den Ferien findet kein Kurs statt). 
                    Du kannst jederzeit anfangen mitzumachen (der Kurs fängt am 10.10.2024 an)!
                    Der Kurs richtet sich an absolute Anfänger*innen. Falls du schonmal etwas programmiert hast,  
                    wirst du dich in diesem Kurs vermutlich langweilen. Für Fortgeschrittene haben wir die Programmierung mit dem Python-Modul Arcade vorbereitet.
                    Der Kurs ist kostenlos!
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="ersti24">
                <Accordion.Header>Ersti Treffen 16.10.2024 x FLINTA* in STEM</Accordion.Header>
                <Accordion.Body>
                    Gemeinsam mit
                    <a href="https://www.instagram.com/flinta_in_stem_luh?igsh=MzRlODBiNWFlZA=="> FLINTA* in STEM </a> 
                    organisieren wir für den 16. Oktober 2024 in der Leibniz Uni Hannover ein Treffen für alle Erstis in STEM-Studiengängen
                    (Science, Technology, Engineering, Mathematics). Wir sorgen für Getränke und Musik. Ort tba.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <br/>Vergangene Veranstaltungen<br/>

        <Accordion data-bs-theme="dark" className="accordion">
            <Accordion.Item eventKey="girlsday">
                <Accordion.Header>Girl's Day 2024</Accordion.Header>
                <Accordion.Body>
                    Zusammen mit euch haben wir Einhorn-Roboter programmiert und eine eigene Spielkonsole gelötet! Kommt gerne nächstes Jahr wieder vorbei.
                    Auf der offiziellen
                    <a href="https://www.girls-day.de/.oO/Show/unicornscode/einhorn-roboter-und-loetwerkstatt"> Webseite</a> könnt ihr das vergangene Programm einsehen.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='ersti23'>
                <Accordion.Header>Ersti Treffen 2023</Accordion.Header>
                <Accordion.Body>
                    bla
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='hackover24'>
                <Accordion.Header>Hackover 2024</Accordion.Header>
                <Accordion.Body>
                    An einem Vormittag haben wir zusammen mit euch ein kreatives Häkeltreffen veranstaltet. 
                    Es gab Raum, sich auszutauschen und andere Hacker*innen kennen zu lernen.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='hackover23'>
                <Accordion.Header>Hackover 2023</Accordion.Header>
                <Accordion.Body>
                    Als UnicornsCode-Auftakt haben wir einen Vortrag über unser Konzept gehalten. Gemeinsam mit einer Doktorandin von der Leibniz Uni Hannover
                    enstand eine spannende Diskussion darüber, wie Jugendliche für Informatik begeistert werden können. Hierbei wurden unter anderem Kontakte mit Interessierten, Eltern und
                    der Hochschule Hannover ausgetauscht. 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>

    );
}

export default Dates;