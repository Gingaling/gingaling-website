import React from "react";
import { Card } from "react-bootstrap";

export default function ResourceCard(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img
            variant="top"
            src={props.resourceData.resourceImage}
          ></Card.Img>
          <Card.Title>{props.resourceData.resourceName}</Card.Title>
          <Card.Text></Card.Text>
          <Card.Link>Link to Resource</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
