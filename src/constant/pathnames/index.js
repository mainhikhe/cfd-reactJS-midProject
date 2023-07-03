const COURSES_PATH = "/courses";
const PROFILE_PATH = "/profile";

export const PATHS = {
  HOME: "/",
  COURSES: COURSES_PATH,
  COURSE_DETAIL: COURSES_PATH + "/:slug",
  COURSE_REGISTER: "/register/:slug",

  PROFILE: {
    INDEX: PROFILE_PATH,
    COURSES: PROFILE_PATH + "/my-courses",
    PAYMENT: PROFILE_PATH + "/my-payment",
  },
  BLOG: "/blog",
  BLOGDETAIL: "/blogdetail",
  CONTACT: "/contact",
  ABOUT: "/about",
  // COURSEORDER: "/courseorder",
  CHANGEPASSWORD: "/changepassword",
  PAYMENTMETHOD: "/paymentmethod",
  PRIVACY: "/privacy",
};
