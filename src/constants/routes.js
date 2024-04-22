const ROUTES = {
  notFound: "/404",
  forbidden: "/403",

  // Auth routes
  auth: "/auth",
  login: "/auth/login",
  register: "/auth/register",

  // Main routes
  dashboard: "/",
  userProfile: "/profile",
  recruitments: "/recruitments",
  recruitmentDetail: "/recruitments/:recruitmentId",

  // Company admin routes
  companyAdmin: "/manage/my-company",
  companyManageRecruitments: "/manage/my-company/recruitments",
  companyRecruitmentCreate: "/manage/my-company/recruitments/create",
  companyRecruitmentDetail: "/manage/my-company/recruitments/:recruitmentId",

  // Admin routes
  admin: "/admin",
  adminManageCompanies: "/admin/company",
  adminCreateCompany: "/admin/company/create",
  adminCompanyDetail: "/admin/company/:companyId",
};

export default ROUTES;
