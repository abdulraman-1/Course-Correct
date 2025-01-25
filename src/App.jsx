import { Route, Routes } from "react-router-dom"
import AppRoute from "./NavBarRoute/AppRoute"

import SignupPage from "./Pages/SignupPage"
import LoginPage from "./Pages/LoginPage"
import LessonPage from "./Pages/LessonPage"
import VideoPage from "./Pages/VideoPage"
import DepartmentPage from "./Pages/DepartmentPage"
import CoursesPage from "./Pages/CoursesPage"
import CalendarPage from "./Pages/CalendarPage"
import PastQuestionPage from "./Pages/PastQuestionPage"
import BrainStormPage from "./Pages/BrainStormPage"
import CoursePage from "./Pages/CoursePage"
import AboutUsPage from "./Pages/AboutUsPage"
import TutorialVideoPage from "./Pages/TutorialVideoPage"
import NotFoundPage from "./Pages/NotFoundPage"

import SettingsPage from "./Pages/SettingsPage"

const App = () => {
  return (
    <Routes>     
      <Route index path="/login" element={<LoginPage />}/>
      <Route index path="/signup" element={<SignupPage />}/>
      <Route index path="/" element={<DepartmentPage />}/>
      <Route path="/" element={<AppRoute />}>
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:courseId" element={<CoursePage />} />
        <Route path="lesson" element={<LessonPage />} />
        <Route path="calendar" element={<CalendarPage />}/>
        <Route path="pastquestions" element={<PastQuestionPage />}/>
        <Route path="brainstorm" element={<BrainStormPage />}/>
        <Route path="about" element={<AboutUsPage />}/>
        <Route path="tutorialvideo" element={<TutorialVideoPage />}/>
        <Route path="video" element={<VideoPage />} />
        <Route path="setting" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  )
}

export default App