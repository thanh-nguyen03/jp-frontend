import { AiOutlineHome } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import ROUTES from "src/constants/routes";

const mainSidebar = [
  {
    title: "Dashboard",
    path: ROUTES.dashboard,
    icon: AiOutlineHome,
  },
  {
    title: "Profile",
    path: ROUTES.userProfile,
    icon: ImProfile,
  },
  {
    title: "Admin",
    path: ROUTES.admin,
    icon: AiOutlineHome,
  },
  {
    title: "Recruiter",
    path: ROUTES.recruiter,
    icon: AiOutlineHome,
  },
];

const adminSidebar = [
  {
    title: "Dashboard",
    path: ROUTES.dashboard,
    icon: AiOutlineHome,
  },
];

const recruiterSidebar = [];

export default {
  [ROUTES.dashboard]: mainSidebar,
  [ROUTES.admin]: adminSidebar,
  [ROUTES.recruiter]: recruiterSidebar,
};
