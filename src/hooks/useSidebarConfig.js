import { useMemo } from "react";
import { matchPath, useLocation } from "react-router-dom";
import _sidebarConfig from "src/constants/sidebarConfig";

const useSidebarConfig = () => {
  const { pathname } = useLocation();
  return useMemo(() => {
    const sidebarConfig =
      _sidebarConfig[
        Object.keys(_sidebarConfig)
          .reverse()
          .find((path) => matchPath({ path, end: false }, pathname))
      ];

    return sidebarConfig ?? [];
  }, [pathname]);
};

export default useSidebarConfig;
