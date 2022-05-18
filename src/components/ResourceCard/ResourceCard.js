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
            alt={props.resourceData.resourceAlt}
          ></Card.Img>
          <Card.Title>{props.resourceData.resourceName}</Card.Title>
          <Card.Text></Card.Text>
          <Card.Link href={props.resourceData.resourceUrl} target="_blank">
            Link to {props.resourceData.resourceName}
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
