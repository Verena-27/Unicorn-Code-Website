import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';


function Register(){

    return(
        <div className="content register">
        <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control/>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={12}>
                Identifizierst du dich als MINTA*?
            </Form.Label>
            <Col sm={10}>
                <Form.Check
                type="radio"
                label="Ja"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                />
            <Form.Check
              type="radio"
              label="Nein"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Keine Angabe"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>

            <Form.Group controlId="formBasicAge">
                <Form.Label>Alter</Form.Label>
                <Form.Control/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label as="legend" column sm={10}>
                  Hast du einen eigenen Laptop?
              </Form.Label>
            <Col sm={10}>
                <Form.Check
                type="radio"
                label="Ja"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                />
            <Form.Check
              type="radio"
              label="Nein"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Keine Angabe"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>

        <Form.Label>Interesse an folgenden Angeboten</Form.Label>
        <Form.Control as="textarea" rows={3} />

        <Form.Label>Bemerkungen (optional)</Form.Label>
        <Form.Control as="textarea" rows={3} />

            <Button variant="primary" type="submit">
                Email senden
            </Button>
        </Form>
        </div>
    );
}

export default Register;