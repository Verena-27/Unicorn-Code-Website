import Accordion from "react-bootstrap/Accordion";
import { Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const yearBadgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.72rem",
  fontWeight: 700,
  lineHeight: 1,
  padding: "0.4rem 0.7rem",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.12)",
  color: "#f8f9fa",
  whiteSpace: "nowrap",
};

const yearTagGroupStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  flexWrap: "wrap",
  marginLeft: "0.75rem",
};

function YearTags({ years }) {
  return (
    <span style={yearTagGroupStyle}>
      {years.map((year) => (
        <span key={year} style={yearBadgeStyle}>
          {year}
        </span>
      ))}
    </span>
  );
}

function EventLayout({ date, children, images = [] }) {
  const hasImages = images.length > 0;
  const mediaStackStyle = {
    display: "grid",
    gridTemplateColumns:
      images.length > 1 ? "repeat(2, minmax(0, 1fr))" : "1fr",
    gap: "1rem",
    alignItems: "start",
  };

  const textColumnSize = hasImages && images.length === 1 ? 8 : 12;
  const mediaColumnSize = hasImages && images.length === 1 ? 4 : 12;

  return (
    <Row className="g-3 align-items-start">
      <Col xs={12}>
        <h4 data-testid="event-date" style={{ marginBottom: "0.75rem" }}>
          {date}
        </h4>
      </Col>
      <Col md={textColumnSize} data-testid="event-text">
        {children}
      </Col>
      {hasImages && (
        <Col md={mediaColumnSize}>
          <div data-testid="event-media-stack" style={mediaStackStyle}>
            {images.map(({ src, alt, style, className = "" }, index) => (
              <Image
                key={`${alt}-${index}`}
                src={src}
                alt={alt}
                fluid
                className={className}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  ...style,
                }}
              />
            ))}
          </div>
        </Col>
      )}
    </Row>
  );
}

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
            <span style={{ display: "flex", alignItems: "center" }}>
              <span>Ersti Treffen 22. Oktober 2026</span>
              <YearTags years={["2026"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <EventLayout
              date="22. Oktober 2026"
              images={[
                {
                  src: "/img/ersti_treffen_26.jpg",
                  alt: "Ersti Treffen Flyer 2026",
                },
              ]}
            >
              <p>
                Wir laden alle FINTA* Studis zum Ersti Treffen in den FINTA*
                Raum ein! Kommt vorbei, um uns kennenzulernen und euch mit
                anderen FINTA* Studis zu vernetzen. Wir freuen uns auf euch!
              </p>
            </EventLayout>
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
      <h3>Girl's Day</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="girlsday">
          <Accordion.Header>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>Girl's Day</span>
              <YearTags years={["2024", "2025", "2026"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <EventLayout
              date="23. April 2026"
              images={[
                { src: "/img/girls_day26_1.jpg", alt: "Girl's Day 2026" },
                { src: "/img/girls_day26_2.jpg", alt: "Girl's Day 2026" },
              ]}
            >
              <p>
                Das Weltraumabenteuer ging in die zweite Runde! Die
                Teilnehmenden haben es geschafft, die Nachrichten der Aliens zu
                entschlüsseln und die Erde zu kontaktieren. Die Schüler*innen
                haben gemeinsam das Abenteuer abgeschlossen. Mehr Informationen
                findest du auf der{" "}
                <a
                  href="https://www.girls-day.de/.oO/Show/unicornscode/mission-informatik-deine-reise-ins-universum-der-technik.1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Girl's Day Webseite.
                </a>
              </p>
            </EventLayout>
            <hr />
            <EventLayout
              date="23. April 2025"
              images={[
                {
                  src: "/img/girlsday25-1.jpg",
                  alt: "Girl's Day 2025",
                },
                {
                  src: "/img/girlsday25-3.jpg",
                  alt: "Girl's Day 2025",
                },
              ]}
            >
              <p>
                Die Schüler*innen haben ein Weltraumabenteuer als digitale
                Schnitzeljagd absolviert. Dabei haben sie Grundlagen der
                Kryptographie, Programmierung und Algorithmik kennengelernt.
                Mehr Informationen findest du auf der{" "}
                <a
                  href="https://www.girls-day.de/.oO/Show/unicornscode/mission-informatik-deine-reise-ins-universum-der-technik.1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Girl's Day Webseite.
                </a>
              </p>
            </EventLayout>
            <hr />
            <EventLayout
              date="25. April 2024"
              images={[
                {
                  src: "/img/girlsday24.jpg",
                  alt: "Girl's Day 2024",
                  style: { maxHeight: "400px" },
                },
              ]}
            >
              <p>
                In dem Workshop konnten die Schüler*innen blockbasiertes
                Programmieren mit Einhorn-Robotern und das Löten einer
                Spielkonsole ausprobieren. Mehr Informationen findest du auf der{" "}
                <a
                  href="https://www.girls-day.de/.oO/Show/unicornscode/einhorn-roboter-und-loetwerkstatt"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Girl's Day Webseite
                </a>{" "}
                an.
              </p>
            </EventLayout>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h3 className="mt-4">Workshops</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="course2324">
          <Accordion.Header>
            <span style={{ display: "flex", alignItems: "center" }}>
              <span>Programmierkurs</span>
              <YearTags years={["2023/2024"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <EventLayout
              date="Juli 2023 - Juni 2024"
              images={[
                { src: "/img/course23-24.jpeg", alt: "Kurs 2023/2024" },
                { src: "/img/course.jpg", alt: "Kurs 2023/2024" },
              ]}
            >
              <p>
                Wir haben mit euch zusammen in einem wöchentlichen Kurs
                programmieren gelernt und am Ende ein eigenes Spiel mit Python
                entwickelt.
              </p>
            </EventLayout>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="period26">
          <Accordion.Header>
            <span style={{ display: "flex", alignItems: "center" }}>
              <span>
                Ich weiß, wann du letzten Sommer geblutet hast - Privacy
                freundliche Periodenapps
              </span>
              <YearTags years={["2026"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Die Vortragsfolien findest du im Bereich{" "}
            <a href="/files">Dateien</a>.<br></br>
            <br></br>
            <Row className="g-4">
              <Col lg={6}>
                <EventLayout
                  date="1. März 2026"
                  images={[
                    {
                      src: "/img/didays_2026.jpg",
                      alt: "Workshop 1. März 2026",
                      style: { height: "300px" },
                    },
                  ]}
                >
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
                </EventLayout>
              </Col>

              <Col lg={6}>
                <EventLayout
                  date="30. März 2026"
                  images={[
                    {
                      src: "/img/unisexdays_luh_2026.jpg",
                      alt: "Workshop 30. März 2026",
                      style: { height: "300px" },
                    },
                  ]}
                >
                  <p>
                    Im Rahmen der Unisex Days der LUH haben wir uns über die
                    Gefahren von gängigen Periodenapps ausgetauscht.
                  </p>
                </EventLayout>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h3 className="mt-4">Hackover</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="hackover">
          <Accordion.Header>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>Hackover</span>
              <YearTags years={["2024", "2025"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <EventLayout
              date="Juli 2025"
              images={[
                {
                  src: "/img/hackover25.jpg",
                  alt: "Hackover 2025",
                },
              ]}
            >
              <p>
                CCC-Mitglieder haben den Girl's Day Kurs "Weltraumabenteuer" für
                uns getestet und die Einhorn-Roboter durch ein Labyrinth
                gesteuert.
              </p>
            </EventLayout>
            <hr />
            <EventLayout
              date="August 2024"
              images={[
                {
                  src: "/img/hackover24.jpg",
                  alt: "Hackover 2024",
                },
              ]}
            >
              <p>
                Mit allen Hacker*innen, die Lust hatten, haben wir kleine
                Einhörner gehäkelt und uns beim{" "}
                <a
                  href="https://calendify.com/schedule/Ejw4Ye74Q1G?hl=en"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  CCC-Cozy Crochet Corner
                </a>{" "}
                ausgetauscht.
              </p>
            </EventLayout>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h3 className="mt-4">Community events</h3>
      <Accordion
        data-bs-theme="dark"
        className="accordion"
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="sommerfest25">
          <Accordion.Header>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>Sommerfest Uni Hannover</span>
              <YearTags years={["2025"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <EventLayout
              date="3. Juli 2025"
              images={[
                {
                  src: "/img/sommerfest25.jpg",
                  alt: "Sommerfest 2025",
                },
              ]}
            >
              <p>
                Wir haben für euch leckere Shirley Temples und Wildberry Sekts
                gemixed. Falls ihr an unserem Stand erfolgreich die
                Fibonacci-Zahlen gewürfelt habt, habt ihr ein Freigetränk
                bekommen!
              </p>
            </EventLayout>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="pubquiz25">
          <Accordion.Header>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>Pubquiz</span>
              <YearTags years={["2025"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <EventLayout
              date="Oktober 2025"
              images={[
                { src: "/img/pubquiz25-1.jpg", alt: "Pubquiz 2025" },
                { src: "/img/pubquiz25.jpg", alt: "Armbänder basteln" },
              ]}
            >
              <p>
                Mehrere Gruppen haben um den ersten Platz beim Pubquiz im
                Elchkeller gekämpft. Es gab zudem eine kleine Bastelecke, wobei
                kreative Armbänder entstanden sind.
              </p>
            </EventLayout>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="ersti24">
          <Accordion.Header>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>Ersti Treffen</span>
              <YearTags years={["2024"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <EventLayout
              date="Oktober 2024"
              images={[
                {
                  src: "/img/gettogether24.jpg",
                  alt: "Ersti Treffen 2024",
                },
              ]}
            >
              <p>
                Zusammen mit der Unigruppe{" "}
                <span style={{ fontStyle: "italic" }}>FLINTA* in STEM </span>
                haben wir ein Vernetzungstreffen im Elchkeller für euch
                organisiert.
              </p>
            </EventLayout>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="frauentag">
          <Accordion.Header>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>Feministischer Kampftag</span>
              <YearTags years={["2024", "2025"]} />
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <EventLayout
              date="8. März 2025"
              images={[
                {
                  src: "/img/frauentag25.jpg",
                  alt: "Frauentag 2025",
                },
              ]}
            >
              <p>Wir waren bei der Demo in Hannover dabei.</p>
            </EventLayout>
            <hr />
            <EventLayout
              date="8. März 2024"
              images={[
                {
                  src: "/img/frauentag24.jpg",
                  alt: "Frauentag 2024",
                },
              ]}
            >
              <p>
                Gemeinsam waren wir mit euch auf der Straße für
                Gleichberechtigung unterwegs.
              </p>
            </EventLayout>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Dates;
