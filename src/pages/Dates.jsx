import Accordion from "react-bootstrap/Accordion";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Dates() {
  return (
    <div className="main">
      <h2>Programm</h2>
      Am 18.10.2025 findet unser Ersti Treffen statt!
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="network25">
          <Accordion.Header>Ersti Treffen 2025 Pubquiz</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Ersti Treffen 2025" fluid />
              </Col>
              <Col md={8}>Elchkeller get together und Pubquiz.</Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      Du kannst nicht bis nächstes Jahr warten? Dann komm zu einem unserer
      offenen Treffen!
      <br />
      <br />
      <h2>Verganene Veranstaltungen</h2>
      Hier siehst du eine Übersicht über unsere verganen Veranstaltungen und ein
      paar Eindrücke.
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
              <Col md={8}>Weltraumabenteuer.</Col>
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
                Wir möchten mit euch an Einhorn-Robotern basteln und löten! Wenn
                du MINTA* zwischen 10 und 13 bist, melde dich auf der
                offiziellen
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
      <h3 className="mt-4">Ersti Treffen</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="network24">
          <Accordion.Header>Ersti Treffen WiSe 2024</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/dummy.jpg" alt="Ersti Treffen 2024" fluid />
              </Col>
              <Col md={8}>Elchkeller get together.</Col>
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
              <Col md={8}>CCC Mitglieder testen den Girls Day Kurs</Col>
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
              <Col md={8}>Gemeinsames Häkeln.</Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Dates;
