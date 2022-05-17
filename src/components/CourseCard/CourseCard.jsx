import React from 'react'
import Card from 'react-bootstrap/Card'

export default function CourseCard (props) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.courseData.courseName}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {props.courseData.instructorName}
          </Card.Subtitle>
          <Card.Text>{props.courseData.courseDescription}</Card.Text>
          <Card.Link href='#'>Link to Details Page</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}
