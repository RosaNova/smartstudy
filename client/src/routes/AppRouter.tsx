import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routeConfig";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element: Element, protected: isProtected }) => (
          <Route
            key={path}
            path={path}
            element={
              isProtected ? (
                <ProtectedRoute>
                  <Element />
                </ProtectedRoute>
              ) : (
                <Element />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;