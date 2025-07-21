import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css';

function Dates(){

    return(
        <div className='content'>
            <h2>Programm</h2>
            Am 25.04.2024 ist Girl's Day! Und wir sind dabei, du auch?
            <Accordion data-bs-theme="dark" className="accordion" defaultActiveKey="1">
                <Accordion.Item eventKey="girlsday">
                    <Accordion.Header>Girl's Day 2024</Accordion.Header>
                    <Accordion.Body>
                        Wir möchten mit euch an Einhorn-Robotern basteln und löten! 
                        Wenn du MINTA* zwischen 10 und 13 bist, melde dich 
                        auf der offiziellen
                        <a href="https://www.girls-day.de/.oO/Show/unicornscode/einhorn-roboter-und-loetwerkstatt"> Webseite</a> an.
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>

        <br/>Du kannst nicht bis nächstes Jahr warten? Dann komm in unserem laufenden Kurs vorbei!<br/><br/>

        Du brauchst für den Kurs absolut keine Vorkenntnisse. Falls du bisher noch nichts mit Informatik zu tun hattest, kannst du hier raus finden, ob es überhaupt etwas für dich ist.
        Wir haben keinen festen Stundenplan für den Kurs und richten uns nach dir, was dich interessiert und was du lernen möchtest! Bei uns brauchst du keine Angst haben, Fragen zu stellen oder Fehler zu machen.
        Du kannst gerne deinen eigenen Laptop mitbringen oder dir von uns einen leihen. 
        <Accordion data-bs-theme="dark" className='accordion'>
            <Accordion.Item eventKey="course">
                <Accordion.Header>Laufender Kurs montags 17.30-19.00 Uhr</Accordion.Header>
                <Accordion.Body>
                    Der aktuelle Kurs zum Programmieren lernen findet in der Bürgerschule Stadtteilzentrum Nordstadt statt (in den Ferien findet kein Kurs statt). 
                    Du kannst jederzeit anfangen mitzumachen (Der Kurs hat am 28.08.2023 angefangen)!
                    Der Kurs richtet sich an absolute Anfänger*innen. Falls du schonmal etwas programmiert hast,  
                    wirst du dich in diesem Kurs vermutlich langweilen.
                    Der Kurs ist kostenlos!
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        <br/>Vergangene Veranstaltungen<br/>

        <Accordion data-bs-theme="dark" className="accordion">
            <Accordion.Item eventKey='network23'>
                <Accordion.Header>Networking</Accordion.Header>
                <Accordion.Body>FINTA* Informatik Erstis</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='hackover23'>
                <Accordion.Header>Hackover</Accordion.Header>
                <Accordion.Body>setup</Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </div>

    );
}

export default Dates;