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

const MainCompanies = Loadable(lazy(() => import("src/pages/main/companies/CompanyList")));
const MainCompanyDetail = Loadable(lazy(() => import("src/pages/main/companies/CompanyDetail")));

// Users
const AdminManageUsers = Loadable(lazy(() => import("src/pages/admin/users/UserList")));
const AdminUserDetail = Loadable(lazy(() => import("src/pages/admin/users/UserDetail")));
const CompanyManageHRs = Loadable(lazy(() => import("src/pages/company-admin/hr/HRList")));
const CompanyCreateHR = Loadable(lazy(() => import("src/pages/company-admin/hr/HRCreate")));

// Recruitment
// for admins
const CompanyManageRecruitments = Loadable(lazy(() => import("src/pages/company-admin/recruitments/RecruitmentList")));
const CompanyRecruitmentDetail = Loadable(lazy(() => import("src/pages/company-admin/recruitments/RecruitmentDetail")));
const CompanyRecruitmentCreate = Loadable(lazy(() => import("src/pages/company-admin/recruitments/RecruitmentCreate")));
const CompanyRecruitmentApplications = Loadable(
  lazy(() => import("src/pages/company-admin/recruitments/RecruitmentDetail/RecruitmentApplications")),
);
const CompanyRecruitmentApplicationDetail = Loadable(
  lazy(() => import("src/pages/company-admin/recruitments/RecruitmentDetail/RecruitmentApplicationDetail")),
);

// for users
const MainRecruitments = Loadable(lazy(() => import("src/pages/main/recruitments/RecruitmentList")));
const MainRecruitmentDetail = Loadable(lazy(() => import("src/pages/main/recruitments/RecruitmentDetail")));

// Settings
const ChangePassword = Loadable(lazy(() => import("src/pages/main/settings/ChangePassword")));

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
  MainCompanies,
  MainCompanyDetail,

  // Users
  AdminManageUsers,
  AdminUserDetail,
  CompanyManageHRs,
  CompanyCreateHR,

  // Recruitment
  CompanyManageRecruitments,
  CompanyRecruitmentDetail,
  CompanyRecruitmentCreate,
  CompanyRecruitmentApplications,
  CompanyRecruitmentApplicationDetail,
  MainRecruitments,
  MainRecruitmentDetail,

  // Settings
  ChangePassword,
};
