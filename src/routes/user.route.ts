import express from 'express';
import { index, create, update, deleteUser, findById } from '../controllers/UserController';

const routes = express.Router();

routes.get('/', index);
routes.get('/:id', findById);
routes.post('/', create);
routes.put('/:id', update);
routes.delete('/:id', deleteUser);


export default routes;