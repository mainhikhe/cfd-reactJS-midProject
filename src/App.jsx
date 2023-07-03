import HomePage from "./pages/HomePage/index";
import Contact from "./pages/ContactPage/index";
import About from "./pages/About/index";
import Courses from "./pages/Courses/index";
import CourseDetail from "./pages/CourseDetail/index";
import CourseOrder from "./pages/CourseOrder";
import NotFound from "./pages/404NotFound/index";
import BlogDetail from "./pages/BlogDetail/index";
import Blog from "./pages/Blog/index";
import ChangePassword from "./pages/ChangePassword/index";
import PaymentMethod from "./pages/PaymentMethod/index";
import Privacy from "./pages/Privacy/index";
import StudentProfile from "./pages/StudentProfile/index";
import ProfileLayout from "./layout/ProfileLayout";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import MyInfo from "./pages/StudentProfile/MyInfo";
import MyCourses from "./pages/StudentProfile/MyCourses";
import MyPayment from "./pages/StudentProfile/MyPayment";
import { PATHS } from "./constant/pathnames";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      {/* Main */}
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.COURSES} element={<Courses />} />
          <Route path={PATHS.COURSE_DETAIL} element={<CourseDetail />} />
          <Route path={PATHS.COURSE_REGISTER} element={<CourseOrder />} />

          <Route path={PATHS.BLOG} element={<Blog />} />
          <Route path={PATHS.BLOGDETAIL} element={<BlogDetail />} />
          <Route path={PATHS.CHANGEPASSWORD} element={<ChangePassword />} />
          <Route path={PATHS.PAYMENTMETHOD} element={<PaymentMethod />} />
          <Route path={PATHS.PRIVACY} element={<Privacy />} />
          {/* <Route path="studentprofile" element={<StudentProfile />} /> */}
          <Route element={<PrivateRoute />}>
            <Route path={PATHS.PROFILE.INDEX} element={<ProfileLayout />}>
              <Route index element={<MyInfo />} />
              <Route path={PATHS.PROFILE.COURSES} element={<MyCourses />} />
              <Route path={PATHS.PROFILE.PAYMENT} element={<MyPayment />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
