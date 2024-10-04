import AOS from 'aos';
import 'aos/dist/aos.css';
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Loader from "./components/Loader.jsx";
import AppContext from "./context/AppContext.jsx";
import "./index.css";
import ErrorBoundary from './components/ErrorBoundary.jsx';
import NotFound from './components/NotFound.jsx';

const UserLayout = lazy(() => import("./Layouts/UserLayout.jsx"));
const AdminLayout = lazy(() => import("./Layouts/AdminLayout.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const LatestNews = lazy(() => import("./pages/LatestNews.jsx"));
const PastEvents = lazy(() => import("./pages/PastEvents.jsx"));
const ChairmanMessage = lazy(() => import("./pages/ChairmanMessage.jsx"));
const OurInstructors = lazy(() => import("./pages/OurInstructors.jsx"));
const OurAlumni = lazy(() => import("./pages/OurAlumni.jsx"));
const SuccessStories = lazy(() => import("./pages/SuccessStories.jsx"));


AOS.init({
  duration: 1000
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <UserLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (

          <App />
        ),
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "courses",
        element: <Courses />,
        children: [
          {
            path: ":id",
            element: <App />,

          }
        ]
      },
      {
        path: "latestNews",
        element: <LatestNews />,
        children: [
          {
            path: ":id",
            element: <App />,

          }
        ]
      },
      {
        path: "pastEvents",
        element: <PastEvents />,
        children: [
          {
            path: ":id",
            element: <App />,

          }
        ]
      },
      {
        path: "chairmanMessage",
        element: <ChairmanMessage />,
      },
      {
        path: "ourInstructors",
        element: <OurInstructors />,
        children: [
          {
            path: ":id",
            element: <App />,

          }
        ]
      },
      {
        path: "ourAlumni",
        element: <OurAlumni />,
        children: [
          {
            path: ":id",
            element: <App />,

          }
        ]
      },
      {
        path: "successStories",
        element: <SuccessStories />,
        children: [
          {
            path: ":id",
            element: <App />,

          }
        ]
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <Suspense fallback={<Loader />}>
        <AdminLayout />
      </Suspense>
    ),
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContext>
      <ErrorBoundary>
      <RouterProvider router={router} />
      </ErrorBoundary>
    </AppContext>
  </StrictMode>
);
