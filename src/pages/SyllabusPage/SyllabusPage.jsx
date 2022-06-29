import React from "react";
import CourseCard from "../../components/CourseCard/CourseCard";

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
          toggleFont={props.toggleFont}
          togglecontrastStyle={props.togglecontrastStyle}
          toggleButtonStyle={props.toggleButtonStyle}
          toggleLtrSpacingStyle={props.toggleLtrSpacingStyle}
          isContrast={props.isContrast}
          isActiveButton={props.isActiveButton}
          isLtrSpacingActive={props.isLtrSpacingActive}
        />
      ));
    }
    return "<h1>No Data</h1>";
  }

  return <>
  <br></br>  <br></br> 
    <h1 id="MySyllabi"> My Syllabi</h1>
    {generateCourseCards()}
    </>;
}
