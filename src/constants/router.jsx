import { Navigate } from "react-router-dom";
import AuthLayout from "src/layouts/auth";
import Forbidden from "src/pages/fallback/Forbidden";
import NotFound from "src/pages/fallback/NotFound";
import {
  AdminCompanyDetail,
  AdminCreateCompany,
  AdminDashboard,
  AdminManageCompany,
  CompanyAdminDashboard,
  CompanyManageRecruitments,
  CompanyRecruitmentCreate,
  CompanyRecruitmentDetail,
  Login,
  MainDashboard,
  MainRecruitmentDetail,
  MainRecruitments,
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
    {
      path: ROUTES.recruitments,
      children: [
        {
          index: true,
          element: <MainRecruitments />,
        },
        {
          path: ROUTES.recruitmentDetail,
          element: <MainRecruitmentDetail />,
        },
      ],
    },
  ],
};

const companyAdminRoutes = {
  path: ROUTES.companyAdmin,
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <CompanyAdminDashboard />,
    },
    {
      path: ROUTES.companyManageRecruitments,
      children: [
        {
          index: true,
          element: <CompanyManageRecruitments />,
        },
        {
          path: ROUTES.companyRecruitmentCreate,
          element: <CompanyRecruitmentCreate />,
        },
        {
          path: ROUTES.companyRecruitmentDetail,
          element: <CompanyRecruitmentDetail />,
        },
      ],
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
  companyAdminRoutes,
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
