const getMostMatchingPath = (pathname, routes) => {
  const pathnameSegments = pathname.split("/").filter(Boolean);

  let mostMatchingPath = "";
  let maxMatchingSegments = 0;

  routes.forEach((route) => {
    const routeSegments = route.split("/").filter(Boolean);
    let matchingSegments = 0;

    for (let i = 0; i < routeSegments.length; i++) {
      if (routeSegments[i] === pathnameSegments[i]) {
        matchingSegments++;
      } else {
        break;
      }
    }

    if (matchingSegments > maxMatchingSegments) {
      maxMatchingSegments = matchingSegments;
      mostMatchingPath = route;
    }
  });

  return mostMatchingPath;
};

export default getMostMatchingPath;
