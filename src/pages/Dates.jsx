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
        <Accordion.Item eventKey="gpn26">
          <Accordion.Header>
            4.-7. Juni 2026: GPN - GulaschProgrammierNacht Karlsruhe
          </Accordion.Header>
          <Accordion.Body>
            Falls ihr Tickets für die{" "}
            <a
              href="https://cfp.gulas.ch/gpn24/"
              target="_blank"
              rel="noreferrer noopener"
            >
              GPN
            </a>{" "}
            ergattert habt, schaut gerne beim Vortrag von unserem Kollegen Tim
            Wittenborg vom{" "}
            <a
              href="https://en.borgnetzwerk.org/wisskomm-wiki-2026/"
              target="_blank"
              rel="noreferrer noopener"
            >
              BorgNetzWerk
            </a>{" "}
            vorbei! Er wird über eine gemeinsame Wissens-Infrastruktur sprechen
            um Wissen besser auffindbar zu machen. Außerdem teilt er seine
            Erfahrungen über SpeakerMining, welches unter anderem einen großen
            Gender Bias in politischen Talkshows aufdeckt. Mehr Informationen
            findest du auf der{" "}
            <a
              href="https://cfp.gulas.ch/gpn24/talk/review/VNGNN7D8RGU3BKGLTYJG8FHU7KKEHHKD"
              target="_blank"
              rel="noreferrer noopener"
            >
              Veranstaltungsseite
            </a>
            .
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      Schau dir an, was wir in der Vergangenheit gemacht haben!
      <br />
      <br />
      <h2>Vergangene Veranstaltungen</h2>
      Hier siehst du eine Übersicht über unsere vergangenen Veranstaltungen.
      <br></br>
      <br></br>
      {/* === Girls Day === */}
      <h3>Girl's Day</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="girlsday26">
          <Accordion.Header>
            Girl's Day 2026: Weltraumabenteuer II
          </Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image
                  src="/img/girlsday26.jpg"
                  alt="Girl's Day 2026"
                  style={{ height: "400px" }}
                  fluid
                />
              </Col>
              <Col md={8}>
                <h4>23. April 2026</h4>
                Das Weltraumabenteuer ging in die zweite Runde! Ihr habt es
                geschafft. Dieses Mal konntet ihr die Erde mithilfe von LEDs auf
                Platinen benachrichtigen, dass ihr wohlauf seid und euch auf den
                Heimweg macht. Mehr Informationen findest du auf der{" "}
                <a
                  href="https://www.girls-day.de/.oO/Show/unicornscode/mission-informatik-deine-reise-ins-universum-der-technik.1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Girl's Day Webseite.
                </a>{" "}
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="girlsday25">
          <Accordion.Header>Girl's Day 2025 Weltraumabenteuer</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image
                  src="/img/girlsday25-1.jpg"
                  alt="Girl's Day 2025"
                  fluid
                />
                <br></br>
                <br></br>
                <Image
                  src="/img/girlsday25-3.jpg"
                  alt="Girl's Day 2025"
                  fluid
                />
              </Col>
              <Col md={8}>
                <h4>23. April 2025</h4>
                Die Schüler*innen haben ein Weltraumabenteuer als digitale
                Schnitzeljagd absolviert. Dabei haben sie Grundlagen der
                Kryptographie, Programmierung, und Algorithmik kennengelernt.
                Mehr Informationen findest du auf der{" "}
                <a
                  href="https://www.girls-day.de/.oO/Show/unicornscode/mission-informatik-deine-reise-ins-universum-der-technik.1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Girl's Day Webseite.
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
                <Image
                  src="/img/girlsday24.jpg"
                  alt="Girl's Day 2024"
                  style={{ height: "400px" }}
                  fluid
                />
              </Col>
              <Col md={8}>
                <h4>25. April 2024</h4>
                In dem Workshop konnten die Schüler*innen blockbasiertes
                Programmieren mit Einhorn-Robotern und das Löten einer
                Spielkonsole ausprobieren. Mehr Informationen findest du auf der{" "}
                <a
                  href="https://www.girls-day.de/.oO/Show/unicornscode/einhorn-roboter-und-loetwerkstatt"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Girl's Day Webseite
                </a>{" "}
                an.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* === Programmierkurs === */}
      <h3 className="mt-4">Programmierkurs</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="frauentag25">
          <Accordion.Header>Programmierkurs 2023/2024</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image src="/img/course23-24.jpeg" alt="Kurs 2023/2024" fluid />
                <br></br>
                <br></br>
                <Image src="/img/course.jpg" alt="Kurs 2023/2024" fluid />
              </Col>
              <Col md={8}>
                <h4>Juli 2023 - Juni 2024</h4>
                Wir haben mit euch zusammen in einem wöchentlichen Kurs
                programmieren gelernt und am Ende ein eigenes Spiel mit Python
                entwickelt.
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
                <Image src="/img/pubquiz25-1.jpg" alt="Pubquiz 2025" fluid />

                <br></br>
                <br></br>
                <Image src="/img/pubquiz25.jpg" alt="Armbänder basteln" fluid />
              </Col>
              <Col md={8}>
                <h4>Oktober 2025</h4>
                Mehrere Gruppen haben um den ersten Platz beim Pubquiz im
                Elchkeller gekämpft. Es gab zudem eine kleine Bastelecke, wobei
                kreative Armbänder entstanden sind.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="network24">
          <Accordion.Header>Ersti Treffen 2024</Accordion.Header>
          <Accordion.Body>
            <Row className="align-items-center">
              <Col md={4}>
                <Image
                  src="/img/gettogether24.jpg"
                  alt="Ersti Treffen 2024"
                  fluid
                />
              </Col>
              <Col md={8}>
                <h4>Oktober 2024</h4>
                Zusammen mit der Unigruppe{" "}
                <span style={{ fontStyle: "italic" }}>FLINTA* in STEM </span>
                haben wir ein Vernetzungstreffen im Elchkeller für euch
                organisiert.
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/*====Workshops====*/}
      <h3 className="mt-4">Workshops und Vorträge</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="period26">
          <Accordion.Header>
            1. & 30. März 2026: Ich weiß, wann du letzten Sommer geblutet hast -
            Privacy freundliche Periodenapps
          </Accordion.Header>
          <Accordion.Body>
            Die Vortragsfolien findest du im Bereich{" "}
            <a href="/files">Dateien</a>.<br></br>
            <br></br>
            <Row>
              <Col md={6}>
                <div style={{ marginBottom: "20px" }}>
                  <Image
                    src="/img/didays_2026.jpg"
                    alt="Workshop 1. März 2026"
                    fluid
                    style={{ marginBottom: "10px", height: "300px" }}
                  />
                  <h4>1. März 2026</h4>
                  <p>
                    Im Rahmen der DiDays haben wir einen Workshop zu privacy
                    freundlichen Periodenapps angeboten. Interessierte konnten
                    direkt vor Ort ihre Daten sicher für eine open source
                    Periodenapp konvertieren lassen. Mehr Informationen findest
                    du auf der{" "}
                    <a
                      href="https://termine.di.day/events/781b4747-05db-4657-afe4-2160e9d69ae7"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Webseite des Di.Day
                    </a>
                    .
                  </p>
                </div>
              </Col>

              {/* Event 2 */}
              <Col md={6}>
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <Image
                      src="/img/unisexdays_luh_2026.jpg"
                      alt="Workshop 30. März 2026"
                      fluid
                      style={{
                        height: "300px",
                        width: "30%",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />

                    <Image
                      src="/img/unisexdays_luh_2026-1.jpg"
                      alt="Workshop 30. März 2026"
                      fluid
                      style={{
                        height: "300px",
                        width: "50%",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                  <h4>30. März 2026</h4>
                  <p>
                    Im Rahmen der Unisex Days der LUH haben wir uns über die
                    Gefahren von gängigen Periodenapps ausgetauscht.
                  </p>
                </div>
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
                <Image src="/img/hackover25.jpg" alt="Hackover 2025" fluid />
              </Col>
              <Col md={8}>
                <h4>Juli 2025</h4>
                CCC-Mitglieder haben den Girl's Day Kurs "Weltraumabenteuer" für
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
                <Image src="/img/hackover24.jpg" alt="Hackover 2024" fluid />
              </Col>
              <Col md={8}>
                <h4>August 2024</h4>
                Mit allen Hacker*innen, die Lust hatten, haben wir kleine
                Einhörner gehäkelt und uns beim{" "}
                <a
                  href="https://calendify.com/schedule/Ejw4Ye74Q1G?hl=en"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  CCC-Cozy Crochet Corner
                </a>{" "}
                ausgetauscht.
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
                <Image
                  src="/img/sommerfest25.jpg"
                  alt="Sommerfest 2025"
                  fluid
                />
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
                <Image src="/img/frauentag25.jpg" alt="Frauentag 2025" fluid />
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
                <Image src="/img/frauentag24.jpg" alt="Frauentag 2024" fluid />
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
