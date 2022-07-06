import React from "react";
import Card from "react-bootstrap/Card";

export default function CourseCard(props) {
  return (
    <>
    <section id={`${props.isLtrSpacingActive? "LtrSpacingStyle" : "null"}`}>
      <Card id={`${props.isContrast ? "contrastStyle" : "null"}`}>
        <Card.Body id={`${props.isFontActive ? "diffStyle" : "null"}`}>
          <Card.Title>{props.courseData.courseName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.courseData.instructorName}
          </Card.Subtitle>
          <Card.Text>{props.courseData.courseDescription}</Card.Text>
          <div id="skiplink">
            <Card.Link href={props.courseData.link}>
              Link to Details Page
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
        </section>
    </>
  );
}