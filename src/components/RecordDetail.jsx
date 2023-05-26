import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

function RecordDetail() {
  return (
    <CardGroup>
      <Card className="shadow">
        <Card.Body>
          <Card.Title>details</Card.Title>
          <Card.Subtitle>subtitle</Card.Subtitle>
        </Card.Body>
        <Card.Footer className="text-muted">머라머라</Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default RecordDetail;
