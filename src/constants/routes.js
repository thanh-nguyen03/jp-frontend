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

  // Admin routes
  admin: "/admin",
  adminManageCompanies: "/admin/company",
  adminCreateCompany: "/admin/company/create",
  adminCompanyDetail: "/admin/company/:companyId",
};

export default ROUTES;
