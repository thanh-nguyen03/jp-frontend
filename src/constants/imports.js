import { lazy } from "react";
import Loadable from "src/components/Loadable";

// Auth
const Login = Loadable(lazy(() => import("src/pages/auth/Login")));
const Register = Loadable(lazy(() => import("src/pages/auth/Register")));

// Dashboard
const MainDashboard = Loadable(lazy(() => import("src/pages/main/Dashboard")));
const RecruiterDashboard = Loadable(lazy(() => import("src/pages/recruiter/Dashboard")));
const AdminDashboard = Loadable(lazy(() => import("src/pages/admin/Dashboard")));

// Company
const AdminManageCompany = Loadable(lazy(() => import("src/pages/admin/companies/CompanyList")));
const AdminCreateCompany = Loadable(lazy(() => import("src/pages/admin/companies/CompanyCreate")));
const AdminCompanyDetail = Loadable(lazy(() => import("src/pages/admin/companies/CompanyDetail")));

export {
  Login,
  Register,
  MainDashboard,
  RecruiterDashboard,
  AdminDashboard,
  AdminManageCompany,
  AdminCreateCompany,
  AdminCompanyDetail,
};
