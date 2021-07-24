import express from 'express';
import { create } from '../controllers/QuestionController';

const routes = express.Router();

routes.post('/', create);

export default routes;