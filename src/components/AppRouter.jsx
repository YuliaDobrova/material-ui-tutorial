import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import mainRoutes from "../routes/mainRoutes";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.name}
          />
        ))}
        <Redirect to="/notes" />
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
