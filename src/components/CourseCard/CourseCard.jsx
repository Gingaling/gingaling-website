
import React from 'react'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'

export default function CourseCard (props) {

  const [isActive, setIsActive] = useState(false);

  const toggleDiffStyle = () => {
    setIsActive(!isActive);
  }

  return (
    <>
    <button onClick={toggleDiffStyle}>Click Me</button>
      <Card style={{ width: '18rem' }}>
        <Card.Body id={`${isActive ? "diffStyle" : "null"}`}>

import React from "react";
import Card from "react-bootstrap/Card";

export default function CourseCard(props) {
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className={`font${props.isFontActive ? "largeFont" : "null"}`}
      >
        <Card.Body>

          <Card.Title>{props.courseData.courseName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.courseData.instructorName}
          </Card.Subtitle>
          <Card.Text>{props.courseData.courseDescription}</Card.Text>
          <Card.Link href="#">Link to Details Page</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}
