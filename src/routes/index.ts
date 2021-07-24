import express , { Router } from 'express';
import UserRoute from './user.route';
import LevelRoute from './level.route';
import QuestionRoute from './question.route';


const routes = express.Router();

routes.use('/usuario', UserRoute);
routes.use('/level', LevelRoute);
routes.use('/question', QuestionRoute);

export default routes;