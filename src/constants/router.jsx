import { Navigate } from "react-router-dom";
import AuthLayout from "src/layouts/auth";
import Forbidden from "src/pages/fallback/Forbidden";
import NotFound from "src/pages/fallback/NotFound";
import {
  AdminCompanyDetail,
  AdminCreateCompany,
  AdminDashboard,
  AdminManageCompany,
  Login,
  MainDashboard,
  RecruiterDashboard,
  Register,
} from "src/constants/imports";
import ROUTES from "src/constants/routes";
import MainLayout from "src/layouts/main";

const authRoutes = {
  path: ROUTES.auth,
  element: <AuthLayout />,
  children: [
    { path: ROUTES.login, element: <Login /> },
    { path: ROUTES.register, element: <Register /> },
  ],
};

const mainRoutes = {
  path: ROUTES.dashboard,
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <MainDashboard />,
    },
  ],
};

const recruiterRoutes = {
  path: ROUTES.recruiter,
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <RecruiterDashboard />,
    },
  ],
};

const adminRoutes = {
  path: ROUTES.admin,
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <AdminDashboard />,
    },
    {
      path: ROUTES.adminManageCompanies,
      children: [
        {
          index: true,
          element: <AdminManageCompany />,
        },
        {
          path: ROUTES.adminCreateCompany,
          element: <AdminCreateCompany />,
        },
        {
          path: ROUTES.adminCompanyDetail,
          element: <AdminCompanyDetail />,
        },
      ],
    },
  ],
};

export default [
  mainRoutes,
  authRoutes,
  recruiterRoutes,
  adminRoutes,
  {
    path: ROUTES.dashboard,
    element: <MainLayout />,
    children: [
      { path: ROUTES.notFound, element: <NotFound /> },
      { path: ROUTES.forbidden, element: <Forbidden /> },
      { path: "*", element: <Navigate to={ROUTES.notFound} replace /> },
    ],
  },
  { path: "*", element: <Navigate to={ROUTES.notFound} replace /> },
];
