import Accordion from "react-bootstrap/Accordion";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Dates() {
  return (
    <div className="main">
      <h2>Programm</h2>
      Hier sind unsere bevorstehenden Veranstaltungen:
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="period26">
          <Accordion.Header>
            Ich weiß, wann du letzten Sommer geblutet hast - Privacy freundliche
            Periodenapps
          </Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image
                  src="/img/dummy.jpg"
                  alt="Periodenapps Workshop 2026"
                  fluid
                />
              </Col>
              <Col md={8}>
                <h4>1. März 2026</h4>
                Im Rahmen der DiDays bieten wir einen Workshop zu privacy
                freundlichen Periodenapps an. Mehr Informationen findest du auf
                der{" "}
                <a href="https://termine.di.day/events/781b4747-05db-4657-afe4-2160e9d69ae7">
                  {" "}
                  Webseite des Di.Day.
                </a>{" "}
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="girlsday26">
          <Accordion.Header>Girl's Day 2026 Weltraumabenteuer</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Ersti Treffen 2025" fluid />
              </Col>
              <Col md={8}>
                <h4>23. April 2025</h4>
                Das Weltraumabenteuer geht in die zweite Runde! Freut euch auf
                spannende Herausforderungen, um zurück zur Erde zu gelangen.
                Mehr Informationen findest du auf der{" "}
                <a href="https://www.girls-day.de/.oO/Show/unicornscode/mission-informatik-deine-reise-ins-universum-der-technik.1">
                  {" "}
                  Webseite.
                </a>{" "}
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      Schau dir an, was wir in der Vergangenheit gemacht haben!
      <br />
      <br />
      <h2>Vergangene Veranstaltungen</h2>
      Hier siehst du eine Übersicht über unsere vergangenen Veranstaltungen und
      ein paar Eindrücke.
      <br></br>
      <br></br>
      {/* === Girls Day === */}
      <h3>Girl's Day</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="girlsday25">
          <Accordion.Header>Girl's Day 2025 Weltraumabenteuer</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Girl's Day 2025" fluid />
              </Col>
              <Col md={8}>
                <h4>23. April 2025</h4>
                Die Schüler*innen haben ein Weltraumabenteuer als digitale
                Schnitzeljagd absolviert. Dabei haben sie Grundlagen der
                Kryptographie, Programmierung, und Algorithmik kennengelernt.
                Mehr Informationen findest du auf der{" "}
                <a href="https://www.girls-day.de/.oO/Show/unicornscode/mission-informatik-deine-reise-ins-universum-der-technik.1">
                  {" "}
                  Webseite.
                </a>{" "}
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="girlsday24">
          <Accordion.Header>Girl's Day 2024 Löten</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Girl's Day 2024" fluid />
              </Col>
              <Col md={8}>
                <h4>25. April 2024</h4>
                In dem Workshop konnten die Schüler*innen blockbasiertes
                Programmieren mit Einhorn-Robotern und das Löten einer
                Spielkonsole ausprobieren. Mehr Informationen findest du auf der{" "}
                <a href="https://www.girls-day.de/.oO/Show/unicornscode/einhorn-roboter-und-loetwerkstatt">
                  {" "}
                  Webseite
                </a>{" "}
                an.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* === Ersti Treffen === */}
      <h3 className="mt-4">Studi Treffen</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="network25">
          <Accordion.Header>Pubquiz 2025</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Pubquiz 2025" fluid />
                <Image src="/img/dummy.jpg" alt="Armbänder basteln" fluid />
              </Col>
              <Col md={8}>
                <h4>Oktober 2025</h4>
                Mehrere Gruppen haben um den ersten Platz im Pubquiz gekämpft.
                Es gab zudem eine kleine Bastelecke, wobei kreative Armbänder
                entstanden sind.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="network24">
          <Accordion.Header>Ersti Treffen 2024</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Ersti Treffen 2024" fluid />
              </Col>
              <Col md={8}>
                <h4>Oktober 2024</h4>
                Zusammen mit der Unigruppe FINTA* in STEM haben wir ein
                Vernetzungstreffen für euch organisiert.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* === Hackover === */}
      <h3 className="mt-4">Hackover</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="hackover25">
          <Accordion.Header>Hackover 2025 Weltraumabenteuer</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Hackover 2025" fluid />
              </Col>
              <Col md={8}>
                <h4>Juli 2025</h4>
                CCC Mitglieder haben den Girl's Day Kurs "Weltraumabenteuer" für
                uns getestet und die Einhorn-Roboter durch ein Labyrinth
                gesteuert.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="hackover24">
          <Accordion.Header>Hackover 2024 Häkeln</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Hackover 2024" fluid />
              </Col>
              <Col md={8}>
                <h4>August 2024</h4>
                Mit allen Hacker*innen, die Lust hatten, haben wir kleine
                Einhörner gehäkelt und uns ausgetauscht.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* === Sommerfest === */}
      <h3 className="mt-4">Sommerfest Uni Hannover</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="sommerfest25">
          <Accordion.Header>Sommerfest 2025</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Sommerfest 2025" fluid />
              </Col>
              <Col md={8}>
                <h4>3. Juli 2025</h4>
                Wir haben für euch leckere Shirley Temples und Wildberry Sekts
                gemixed. Falls ihr an unserem Stand erfolgreich die
                Fibonacci-Zahlen gewürfelt habt, habt ihr ein Freigetränk
                bekommen!
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* === Frauentag === */}
      <h3 className="mt-4">8. März</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="frauentag25">
          <Accordion.Header>Feministischer Kampftag 2025</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Sommerfest 2025" fluid />
              </Col>
              <Col md={8}>
                <h4>8. März 2025</h4>
                Wir waren bei der Demo in Hannover dabei.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="frauentag24">
          <Accordion.Header>Feministischer Kampftag 2024</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Sommerfest 2025" fluid />
              </Col>
              <Col md={8}>
                <h4>8. März 2024</h4>
                Gemeinsam waren wir mit euch auf der Straße für
                Gleichberechtigung unterwegs.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Dates;
