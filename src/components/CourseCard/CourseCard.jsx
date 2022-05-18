import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";

export default function CourseCard(props) {
  const [isActive, setIsActive] = useState(false);

  const [isContrast, setIsContrast] = useState(false);

  const [isActiveButton, setIsActiveButton] = useState(true);

  const [isLtrSpacingActive, setIsLtrSpacingActive] = useState(false);

  const toggleDiffStyle = () => {
    setIsActive(!isActive);
  };

  const togglecontrastStyle = () => {
    setIsContrast(!isContrast);
  };

  const toggleButtonStyle = () => {
    setIsActiveButton(!isActiveButton);
  };

  const toggleLtrSpacingStyle = () =>
    setIsLtrSpacingActive(!isLtrSpacingActive);

  return (
    <>
      <Card id={`${isContrast ? "contrastStyle" : "null"}`}>
        <Card.Body id={`${isActive ? "diffStyle" : "null"}`}>
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
        <section>
          <button
            id={`${isActiveButton ? "buttonStyle" : "null"}`}
            onClick={toggleDiffStyle}
          >
            Font Size ✚
          </button>
          <button
            id={`${isActiveButton ? "buttonStyle" : "null"}`}
            onClick={togglecontrastStyle}
          >
            Change Contrast
          </button>{" "}
          <button
            id={`${isActiveButton ? "buttonStyle" : "null"}`}
            onClick={toggleLtrSpacingStyle}
          >
            Letter Spacing ⬆️
          </button>
        </section>
      </Card>
    </>
  );
}
