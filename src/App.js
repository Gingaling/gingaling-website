import "./App.css";
/* eslint-disable no-tabs */
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from "./components/Header/Header";
// import SignUp from './components/auth/SignUp'
// import SignIn from './components/auth/SignIn'
// import SignOut from './components/auth/SignOut'
// import ChangePassword from './components/auth/ChangePassword'
import SyllabusPage from "./pages/SyllabusPage/SyllabusPage";

export default function App() {
  const [user, setUser] = useState(null);
  const [msgAlerts, setMsgAlerts] = useState([]);
  const [isFontActive, setIsFontActive] = useState(false);

  function toggleFont() {
    setIsFontActive(!isFontActive);
    console.log(isFontActive);
  }

  const DUMMY_DATA = [
    {
      courseName: "Accessibility in the Modern Age",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: "Herbert Hoover",
      policies:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
    },
    {
      courseName: "Science",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: "Mary Magdalene",
      policies:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
    },
    {
      courseName: "Math",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: "Albert Einstein",
      policies:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
    },
    {
      courseName: "Crafts",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: "Martha Stewart",
      policies:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
    },
    {
      courseName: "Anthropology",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: "George Clooney",
      policies:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
    },
    {
      courseName: "Writing and Composition",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: "Theresa Hummingbird",
      policies:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
    },
    {
      courseName: "This Class",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: "Dwayne Johnson",
      policies:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
    },
    {
      courseName: "This Class Also",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
      instructorName: "Harry Potter",
      policies:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error",
    },
  ];
  //   const clearUser = () => setUser(null)

  //   const msgAlert = ({ heading, message, variant }) => {
  //     const id = uuid()
  //     setMsgAlerts((msgAlerts) => [
  //       ...msgAlerts,
  //       { heading, message, variant, id }
  //     ])
  //   }

  return (
    <>
      <Header user={user} />
      {/* {msgAlerts.map((msgAlert) => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))} */}
      <main className="container">
        <Routes>
          {/* <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
          />
          <Route
            path='/sign-out'
            element={
              <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
            }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} />}
          /> */}
          <Route
            path="/syllabus"
            element={
              <SyllabusPage
                data={DUMMY_DATA}
                isFontActive={isFontActive}
                toggleFont={toggleFont}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}
