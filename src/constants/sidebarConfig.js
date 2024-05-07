import { AiOutlineHome } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import { FaHome, FaUser } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { GrAnnounce } from "react-icons/gr";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import ROLES from "src/constants/roles";
import ROUTES from "src/constants/routes";

const mainSidebar = [
  {
    title: "Home",
    path: ROUTES.dashboard,
    icon: AiOutlineHome,
  },
  {
    title: "Recruitments",
    path: ROUTES.recruitments,
    icon: GrAnnounce,
  },
  {
    title: "Companies",
    path: ROUTES.companies,
    icon: CgOrganisation,
  },
  {
    title: "My Company",
    path: ROUTES.companyAdmin,
    icon: GoOrganization,
    roles: [ROLES.COMPANY_ADMIN, ROLES.COMPANY_HR],
  },
  {
    title: "Admin",
    path: ROUTES.admin,
    icon: RiAdminFill,
    roles: [ROLES.ADMIN],
  },
];

const companyAccountSidebar = [
  {
    title: "Home",
    path: ROUTES.dashboard,
    icon: IoArrowBackCircleSharp,
  },
  {
    title: "Company Dashboard",
    path: ROUTES.companyAdmin,
    icon: FaHome,
  },
  {
    title: "Manage Recruitments",
    path: ROUTES.companyManageRecruitments,
    icon: GrAnnounce,
  },
  {
    title: "Manage HRs",
    path: ROUTES.companyManageHRs,
    icon: FaUser,
    roles: [ROLES.COMPANY_ADMIN],
  },
];

const adminSidebar = [
  {
    title: "Home",
    path: ROUTES.dashboard,
    icon: IoArrowBackCircleSharp,
  },
  {
    title: "Admin Dashboard",
    path: ROUTES.admin,
    icon: RiAdminFill,
  },
  {
    title: "Manage Companies",
    path: ROUTES.adminManageCompanies,
    icon: GoOrganization,
  },
  {
    title: "Manage Users",
    path: ROUTES.adminManageUsers,
    icon: FaUser,
  },
];

export default {
  [ROUTES.dashboard]: mainSidebar,
  [ROUTES.companyAdmin]: companyAccountSidebar,
  [ROUTES.admin]: adminSidebar,
};
