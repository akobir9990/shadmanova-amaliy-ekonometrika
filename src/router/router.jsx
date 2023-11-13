import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage";
import Author from "../pages/author";
import About from "../pages/about";

import Videos from "../pages/videos";
import Tutorial from "../pages/tutorial";
import TestAPage from "../pages/tests";

import Laboratory from "../pages/laboratory";
import LaboratoryOne from "../pages/laboratory/pages/1";
import LaboratoryTwo from "../pages/laboratory/pages/2";
import LaboratoryThree from "../pages/laboratory/pages/3";
import LaboratoryFour from "../pages/laboratory/pages/4";
import LaboratoryFive from "../pages/laboratory/pages/5";

import Lecture from "../pages/lecture/index";

import LectureOne from "../pages/lecture/pages/1";
import LectureTwo from "../pages/lecture/pages/2";
import LectureThree from "../pages/lecture/pages/3";
import LectureFour from "../pages/lecture/pages/4";
import LectureFive from "../pages/lecture/pages/5";
import LectureSix from "../pages/lecture/pages/6";
import LectureSeven from "../pages/lecture/pages/7";
import LectureEight from "../pages/lecture/pages/8";
import LectureNine from "../pages/lecture/pages/9";
import LectureTen from "../pages/lecture/pages/10";
import LectureEleven from "../pages/lecture/pages/11";
import LectureTwelve from "../pages/lecture/pages/12";
import LectureThreeTeen from "../pages/lecture/pages/13";
import LectureFourTeen from "../pages/lecture/pages/14";
import LectureFifTeen from "../pages/lecture/pages/15";
import LectureSixteen from "../pages/lecture/pages/16";
import LectureSeventeen from "../pages/lecture/pages/17";
import LectureEightteen from "../pages/lecture/pages/18";
import LectureNineteen from "../pages/lecture/pages/19";
import LectureTwenty from "../pages/lecture/pages/20";

import Presentation from "../pages/presentation";

import PresentationOne from "../pages/presentation/pages/1";
import PresentationTwo from "../pages/presentation/pages/2";
import PresentationThree from "../pages/presentation/pages/3";
import PresentationFour from "../pages/presentation/pages/4";
import PresentationFive from "../pages/presentation/pages/5";
import PresentationSix from "../pages/presentation/pages/6";
import PresentationSeven from "../pages/presentation/pages/7";
import PresentationEight from "../pages/presentation/pages/8";
import PresentationNine from "../pages/presentation/pages/9";
import PresentationTen from "../pages/presentation/pages/10";
import PresentationEleven from "../pages/presentation/pages/11";
import PresentationTwelve from "../pages/presentation/pages/12";
import PresentationThreeTeen from "../pages/presentation/pages/13";
import PresentationFourTeen from "../pages/presentation/pages/14";
import PresentationFifTeen from "../pages/presentation/pages/15";
import PresentationSixteen from "../pages/presentation/pages/16";
import PresentationSeventeen from "../pages/presentation/pages/17";
import PresentationEightteen from "../pages/presentation/pages/18";
import PresentationNineteen from "../pages/presentation/pages/19";
import PresentationTwenty from "../pages/presentation/pages/20";

import Practice from "../pages/practice/index";

import PracticeOne from "../pages/practice/pages/1";
import PracticeTwo from "../pages/practice/pages/2";
import PracticeThree from "../pages/practice/pages/3";
import PracticeFour from "../pages/practice/pages/4";
import PracticeFive from "../pages/practice/pages/5";
import PracticeSix from "../pages/practice/pages/6";
import PracticeSeven from "../pages/practice/pages/7";
import PracticeEight from "../pages/practice/pages/8";
import PracticeNine from "../pages/practice/pages/9";
import PracticeTen from "../pages/practice/pages/10";

import "./const";
import {
  ABOUT_PAGE,
  AUTHOR_PAGE,
  HOME_PAGE,
  LABORATORY_PAGE,
  LECTURE_PAGE,
  PRACTICE_PAGE,
  PRESENTATION_PAGE,
  TEST_PAGE,
  TUTORIAL_PAGE,
  VIDEOS_PAGE,
} from "./const";

function router() {
  return (
    <div>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />} />
        <Route path={TUTORIAL_PAGE} element={<Tutorial />} />
        <Route path={AUTHOR_PAGE} element={<Author />} />
        <Route path={ABOUT_PAGE} element={<About />} />
        <Route path={VIDEOS_PAGE} element={<Videos />} />

        <Route path={LABORATORY_PAGE}>
          <Route path="" element={<Laboratory />} />
          <Route path="1" element={<LaboratoryOne />} />
          <Route path="2" element={<LaboratoryTwo />} />
          <Route path="3" element={<LaboratoryThree />} />
          <Route path="4" element={<LaboratoryFour />} />
          <Route path="5" element={<LaboratoryFive />} />
        </Route>

        <Route path={PRESENTATION_PAGE}>
          <Route path="" element={<Presentation />} />
          <Route path="1" element={<PresentationOne />} />
          <Route path="2" element={<PresentationTwo />} />
          <Route path="3" element={<PresentationThree />} />
          <Route path="4" element={<PresentationFour />} />
          <Route path="5" element={<PresentationFive />} />
          <Route path="6" element={<PresentationSix />} />
          <Route path="7" element={<PresentationSeven />} />
          <Route path="8" element={<PresentationEight />} />
          <Route path="9" element={<PresentationNine />} />
          <Route path="10" element={<PresentationTen />} />
          <Route path="11" element={<PresentationEleven />} />
          <Route path="12" element={<PresentationTwelve />} />
          <Route path="13" element={<PresentationThreeTeen />} />
          <Route path="14" element={<PresentationFourTeen />} />
          <Route path="15" element={<PresentationFifTeen />} />
          <Route path="16" element={<PresentationSixteen />} />
          <Route path="17" element={<PresentationSeventeen />} />
          <Route path="18" element={<PresentationEightteen />} />
          <Route path="19" element={<PresentationNineteen />} />
          <Route path="20" element={<PresentationTwenty />} />
        </Route>
        <Route path={LECTURE_PAGE}>
          <Route path="" element={<Lecture />} />
          <Route path="1" element={<LectureOne />} />
          <Route path="2" element={<LectureTwo />} />
          <Route path="3" element={<LectureThree />} />
          <Route path="4" element={<LectureFour />} />
          <Route path="5" element={<LectureFive />} />
          <Route path="6" element={<LectureSix />} />
          <Route path="7" element={<LectureSeven />} />
          <Route path="8" element={<LectureEight />} />
          <Route path="9" element={<LectureNine />} />
          <Route path="10" element={<LectureTen />} />
          <Route path="11" element={<LectureEleven />} />
          <Route path="12" element={<LectureTwelve />} />
          <Route path="13" element={<LectureThreeTeen />} />
          <Route path="14" element={<LectureFourTeen />} />
          <Route path="15" element={<LectureFifTeen />} />
          <Route path="16" element={<LectureSixteen />} />
          <Route path="17" element={<LectureSeventeen />} />
          <Route path="18" element={<LectureEightteen />} />
          <Route path="19" element={<LectureNineteen />} />
          <Route path="20" element={<LectureTwenty />} />
        </Route>

        <Route path={PRACTICE_PAGE}>
          <Route path="" element={<Practice />} />
          <Route path="1" element={<PracticeOne />} />
          <Route path="2" element={<PracticeTwo />} />
          <Route path="3" element={<PracticeThree />} />
          <Route path="4" element={<PracticeFour />} />
          <Route path="5" element={<PracticeFive />} />
          <Route path="6" element={<PracticeSix />} />
          <Route path="7" element={<PracticeSeven />} />
          <Route path="8" element={<PracticeEight />} />
          <Route path="9" element={<PracticeNine />} />
          <Route path="10" element={<PracticeTen />} />
        </Route>
        <Route path={TEST_PAGE} element={<TestAPage />} />
      </Routes>
    </div>
  );
}

export default router;
