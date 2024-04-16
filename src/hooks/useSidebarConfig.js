import { useMemo } from "react";
import { matchPath, useLocation } from "react-router-dom";
import _sidebarConfig from "src/constants/sidebarConfig";
import useAuth from "src/hooks/useAuth";

const useSidebarConfig = () => {
  const { pathname } = useLocation();
  const { isAuthenticated, hasAnyRole } = useAuth();

  return useMemo(() => {
    const sidebarConfig =
      _sidebarConfig[
        Object.keys(_sidebarConfig)
          .reverse()
          .find((path) => matchPath({ path, end: false }, pathname))
      ];

    // Check if user has access to the sidebar
    if (sidebarConfig) {
      return sidebarConfig.filter(({ roles }) => {
        if (!roles) {
          return true;
        }

        return isAuthenticated && hasAnyRole(...roles);
      });
    }

    return sidebarConfig ?? [];
  }, [hasAnyRole, isAuthenticated, pathname]);
};

export default useSidebarConfig;
