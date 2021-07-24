import express from 'express';
import {createLevel, getLevelById} from '../controllers/LevelController';

const routes = express.Router();

routes.post ('/', createLevel);
routes.get('/:id', getLevelById);

export default routes;