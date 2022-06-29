import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/NavBar';
import HomeContent from './pages/HomeContent';
import Profile from './pages/Profile';
import Loading from './components/Loading';
import SyllabusPage from "./pages/SyllabusPage/SyllabusPage";
import ToggleButton from "../src/components/ToggleButton/ToggleButton";
import Resources from "./pages/Resources/Resources";

export default function App() {
  // const [user, setUser] = useState(null);
  // const [msgAlerts, setMsgAlerts] = useState([]);
  const [isFontActive, setIsFontActive] = useState(false);
  const [isContrast, setIsContrast] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [isLtrSpacingActive, setIsLtrSpacingActive] = useState(false);

  function toggleFont() {
    setIsFontActive(!isFontActive);
  }

  const togglecontrastStyle = () => {
    setIsContrast(!isContrast);
  };

  const toggleButtonStyle = () => {
    setIsActiveButton(!isActiveButton);
  };

  const toggleLtrSpacingStyle = () =>
    setIsLtrSpacingActive(!isLtrSpacingActive);

  const DUMMY_DATA = [
    {
      courseName: "GS-395: Accessibility in the Modern Age",
      courseDescription:
        "Dummy text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: 
      <a href="mailto:adunbledore@ga.edu">Instructor: Albus Dunbledore</a>,
    },
    {
      courseName: "HIST-210: English Resistance of Roman Imperialism",
      courseDescription:
        "Dummy text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: <a href="mailto:mmcgonagall@ga.edu">Instructor: Minerva McGonagall</a>,
    },
    {
      courseName: "Math",
      courseDescription:
        "Dummy text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: <a href="mailto:aeinstein@ga.edu">Instructor: Albert Einstein</a>,
     },
    {
      courseName: "Crafts",
      courseDescription:
        "Dummy text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: <a href="mailto: mstewart@ga.edu">Instructor: Martha Stewart</a>,
    },
    {
      courseName: "Anthropology",
      courseDescription:
        "Dummy text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: <a href="mailto:gclooney@ga.edu">Instructor: George Clooney</a>,
    },
    {
      courseName: "Writing and Composition",
      courseDescription:
        "Dummy text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: <a href="mailto:thummingbird@ga.edu">Instructor: Theresa Hummingbird</a>
    },
    {
      courseName: "This Class",
      courseDescription:
        "Dummy text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: <a href="mailto:djohnson@ga.edu">Instructor: Dwayne Johnson</a>,
    },
    {
      courseName: "This Class Also",
      courseDescription:
        "Dummy text...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: <a href="mailto:hpotter@ga.edu">Instructor: Harry Potter</a>,
    },
  ];

  const RESOURCE_DATA = [
    {
      resourceName: "Audioeye",
      resourceUrl:
        "https://www.audioeye.com/?utm_campaign=2021_US_SEM_RCH_Accessability&utm_source=PaidSearch&utm_medium=GoogleSearch&utm_term=%2Bweb%20%2Baccessibility&utm_content=522235834548&gclid=Cj0KCQjwspKUBhCvARIsAB2IYuuVxtrxHSjSyaUQpe2hYhhNBq0EAPpTO-K-Pbx0r3OfqeRLI8Hnf8IaAl54EALw_wcB",
      resourceImage: "https://i.imgur.com/Q3exP4y.png",
      resourceAlt:
        "Stastics showing increase in ADA lawsuits from 2014 to 2021",
    },
    {
      resourceName: "DDIY",
      resourceUrl:
        "https://ddiy.co/web-accessibility-statistics/?gclid=Cj0KCQjwspKUBhCvARIsAB2IYuvNc0MocG-nfv6D6bQdETqJ_x6mCpNIaJ2WaMyDpyWaaYxlXyz4aMoaAmHgEALw_wcB",
      resourceImage: "https://i.imgur.com/rJUlcQw.jpg",
      resourceAlt:
        "59.6% of people with disabilities have internet access in their home",
    },
    {
      resourceName: "Hubspot",
      resourceUrl: "https://blog.hubspot.com/website/accessibility-statistics",
      resourceImage: "https://i.imgur.com/rQjEx81.jpg",
      resourceAlt: "Man and woman viewing tablets in their home",
    },
    {
      resourceName: "Monsido",
      resourceUrl: "https://monsido.com/blog/accessibility-statistics",
      resourceImage: "https://i.imgur.com/ofH8f6I.png",
      resourceAlt:
        "stastics showing the common accessibilities failures on home pages",
    },
    {
      resourceName: "Termly",
      resourceUrl:
        "https://termly.io/resources/articles/data-privacy-web-accessibility-compliance-link/",
      resourceImage: "https://i.imgur.com/zY7yLkT.jpg",
      resourceAlt: "Advertisement for privacy and accessibility web compliance",
    },
    {
      resourceName: "CrownPeak",
      resourceUrl:
        "https://www.crownpeak.com/blog/accessibility-ada/the-ultimate-list-of-web-accessibility-and-ada-statistics",
      resourceImage: "https://i.imgur.com/ffwCozZ.png",
      resourceAlt: "Keyboard with handicap image",
    },
  ];

	const { isLoading } = useAuth0();
	if (isLoading) {
		return <Loading />;
	}

  return (
    <>

      <NavBar />
      <main >
        <div>
          <ToggleButton
            toggleFont={toggleFont}
            togglecontrastStyle={togglecontrastStyle}
            toggleButtonStyle={toggleButtonStyle}
            toggleLtrSpacingStyle={toggleLtrSpacingStyle}
          />
        </div>
        	<div id="app" className="d-flex flex-column h-100">
				{/* <div className="container flex-grow-1"> */}
        <br></br>
        <br></br>
        <Routes>
        	<Route
            path="/"
            element={
              <HomeContent
                isFontActive={isFontActive}
                toggleFont={toggleFont}
                togglecontrastStyle={togglecontrastStyle}
                toggleButtonStyle={toggleButtonStyle}
                toggleLtrSpacingStyle={toggleLtrSpacingStyle}
                isContrast={isContrast}
                isActiveButton={isActiveButton}
                isLtrSpacingActive={isLtrSpacingActive}
              />
            }
          />
					<Route
            path="/profile"
            element={
              <Profile
              />
            }
          />
          <Route
            path="/syllabus"
            element={
              <SyllabusPage
                data={DUMMY_DATA}
                isFontActive={isFontActive}
                toggleFont={toggleFont}
                togglecontrastStyle={togglecontrastStyle}
                toggleButtonStyle={toggleButtonStyle}
                toggleLtrSpacingStyle={toggleLtrSpacingStyle}
                isContrast={isContrast}
                isActiveButton={isActiveButton}
                isLtrSpacingActive={isLtrSpacingActive}
              />
            }
          />
          <Route
            path="/resources"
            element={
              <Resources
                data={RESOURCE_DATA}
                isFontActive={isFontActive}
                toggleFont={toggleFont}
              />
            }
          />
        </Routes>
        </div>
      {/* </div> */}
      </main>
    </>
  );
}
