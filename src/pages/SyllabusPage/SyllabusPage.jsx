import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import ToggleButton from "../../components/ToggleButton/ToggleButton";

export default function SyllabusPage(props) {
  console.log("this page");
  console.log(props.data);

  function generateCourseCards() {
    if (props.data) {
      return props.data.map((d) => (
        <CourseCard
          key={d._id}
          courseData={d}
          isFontActive={props.isFontActive}
        />
      ));
    }
    return "<h1>No Data</h1>";
  }

  return (
    <>
      {generateCourseCards()}
      <ToggleButton />
    </>
  );
}
