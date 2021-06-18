import express , { Router } from 'express';
import UserRoute from './user.route';

const routes = express.Router();

routes.use('/usuario', UserRoute);

export default routes;