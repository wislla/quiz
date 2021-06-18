import express from 'express';
import { index, create } from '../controllers/UserController';

const routes = express.Router();

routes.get('/', index);
routes.post('/', create);


export default routes;