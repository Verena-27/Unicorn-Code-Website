import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';


function Register(){


    
  // Email for general inquiries
  var generalInquiryUser = "anmeldung";
  var generalInquiryDomain = "unicornsco.de";
  var generalInquiryEmail = generalInquiryUser + "@" + generalInquiryDomain;

  // Email for form or email-related issues
  var issuesUser = "tatjana";
  var issuesDomain = "unicornsco.de";
  var issuesEmail = issuesUser + "@" + issuesDomain;
  return(
      <>
      <div className="content ">
      <h2 className="heading">Anmeldung</h2>
          <p>
          Hier kannst du deine Anmeldung an uns (<a href={`mailto:${generalInquiryEmail}`}>{generalInquiryEmail}</a>) für die Kurse abschicken.
          Falls es Probleme mit dem Formular oder der E-mail gibt, schreibe deine Nachricht an{' '}
          <a href={`mailto:${issuesEmail}`}>{issuesEmail}</a>. Bitte beachte, dass sich unsere Angebote an MINTA* von 13-16 Jahren richten.
      </p>
      <Form className='register'>
        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
          <Form.Label column sm={2}>
            Alter
          </Form.Label>
          <Col sm={10}>
            <Form.Control />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={2}></Col>
          <Col sm={10}>
            <Form.Label as="legend">
              Identifizierst du dich als MINTA*?
            </Form.Label>
            <Form.Check
              inline
              type="radio"
              label="Ja"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              inline
              type="radio"
              label="Nein"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              inline
              type="radio"
              label="Keine Angabe"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={2}></Col>
          <Col sm={10}>
            <Form.Label as="legend">
              Hast du einen eigenen Laptop?
            </Form.Label>
            <Form.Check
              inline
              type="radio"
              label="Ja"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              inline
              type="radio"
              label="Nein"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              inline
              type="radio"
              label="Keine Angabe"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Interesse an folgenden Angeboten
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Bemerkungen (optional)
          </Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">
              Email senden
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
    </>
    );
}

export default Register;