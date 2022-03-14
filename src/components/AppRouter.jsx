import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import mainRoutes from '../routes/mainRoutes';
import Layout from './Layout';
import Footer from './footer/Footer';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Layout>
        <Switch>
          {mainRoutes.map(route => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.name}
            />
          ))}
          <Redirect to="/create" />
        </Switch>
        <Footer />
      </Layout>
    </Suspense>
  );
};

export default AppRouter;
