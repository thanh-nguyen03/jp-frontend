import { lazy } from "react";
import Loadable from "src/components/Loadable";

// Auth
const Login = Loadable(lazy(() => import("src/pages/auth/Login")));
const Register = Loadable(lazy(() => import("src/pages/auth/Register")));

// Dashboard
const MainDashboard = Loadable(lazy(() => import("src/pages/main/Dashboard")));
const CompanyAdminDashboard = Loadable(lazy(() => import("src/pages/company-admin/Dashboard")));
const AdminDashboard = Loadable(lazy(() => import("src/pages/admin/Dashboard")));

// Company
const AdminManageCompany = Loadable(lazy(() => import("src/pages/admin/companies/CompanyList")));
const AdminCreateCompany = Loadable(lazy(() => import("src/pages/admin/companies/CompanyCreate")));
const AdminCompanyDetail = Loadable(lazy(() => import("src/pages/admin/companies/CompanyDetail")));

// Recruitment
// for admins
const CompanyManageRecruitments = Loadable(lazy(() => import("src/pages/company-admin/recruitments/RecruitmentList")));
const CompanyRecruitmentDetail = Loadable(lazy(() => import("src/pages/company-admin/recruitments/RecruitmentDetail")));
const CompanyRecruitmentCreate = Loadable(lazy(() => import("src/pages/company-admin/recruitments/RecruitmentCreate")));

// for users
const MainRecruitments = Loadable(lazy(() => import("src/pages/main/recruitments/RecruitmentList")));
const MainRecruitmentDetail = Loadable(lazy(() => import("src/pages/main/recruitments/RecruitmentDetail")));

export {
  // Auth
  Login,
  Register,

  // Dashboard
  MainDashboard,
  CompanyAdminDashboard,
  AdminDashboard,

  // Company
  AdminManageCompany,
  AdminCreateCompany,
  AdminCompanyDetail,

  // Recruitment
  CompanyManageRecruitments,
  CompanyRecruitmentDetail,
  CompanyRecruitmentCreate,
  MainRecruitments,
  MainRecruitmentDetail,
};
