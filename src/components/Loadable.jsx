import { Suspense } from "react";
import LoadingScreen from "src/components/LoadingScreen";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
