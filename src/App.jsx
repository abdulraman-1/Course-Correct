import { Route, Routes } from "react-router-dom";
import AppRoute from "./NavBarRoute/AppRoute";

import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import LessonPage from "./Pages/LessonPage";
import VideoPage from "./Pages/VideoPage";
import DepartmentPage from "./Pages/DepartmentPage";
import CoursesPage from "./Pages/CoursesPage";
import CalendarPage from "./Pages/CalendarPage";
import PastQuestionPage from "./Pages/PastQuestionPage";
import BrainChat from "./Pages/BrainChatPage";
import CoursePage from "./Pages/CoursePage";
import AboutUsPage from "./Pages/AboutUsPage";
import TutorialVideoPage from "./Pages/TutorialVideoPage";
import NotFoundPage from "./Pages/NotFoundPage";

import SelectRoomPage from "./Pages/SelectRoomPage";
import SettingsPage from "./Pages/SettingsPage";

const App = () => {
  return (
    <Routes>
      <Route index path="/login" element={<LoginPage />} />
      <Route index path="/signup" element={<SignupPage />} />
      <Route index path="/" element={<DepartmentPage />} />
      <Route path="/" element={<AppRoute />}>
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:courseId" element={<CoursePage />} />
        <Route
          path="/course/:courseId/lesson/:lessonId"
          element={<LessonPage />}
        />
        <Route path="lesson" element={<LessonPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="pastquestions" element={<PastQuestionPage />} />
        <Route path="selectroom" element={<SelectRoomPage />} />
        <Route path="brainchat/:roomid" element={<BrainChat />} />
        <Route path="about" element={<AboutUsPage />} />

        <Route path="tutorialvideo" element={<TutorialVideoPage />} />
        <Route path="tutorialvideo/:id" element={<VideoPage />} />

        <Route path="profile/setting" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
