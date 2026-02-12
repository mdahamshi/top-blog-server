import usersRoutes from './users.js';

function registerRoutes(app, apiV) {
  app.use(`/api/${apiV}/users`, usersRoutes);
}

export default registerRoutes;
