import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function PointForm() {
  return (
    <CardGroup className="text-center">
      <Card>
        <Card.Body>
          <Button variant="primary"><Card.Title>1,000 P</Card.Title></Button>
        </Card.Body>
        <Card.Footer className="text-muted">Cagong Point</Card.Footer>
      </Card>
      <Card>
        <Card.Body>
        <Button variant="primary"><Card.Title>5,000 P</Card.Title></Button>
        </Card.Body>
        <Card.Footer className="text-muted">Cagong Point</Card.Footer>
      </Card>
      <Card>
        <Card.Body>
        <Button variant="primary"><Card.Title>10,000 P</Card.Title></Button>
        </Card.Body>
        <Card.Footer className="text-muted">Cagong Point</Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default PointForm;