import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnetionsContollers from './controllers/ConnectionController';

const routes = express.Router();
const classControllers = new ClassesController();
const connectionsController = new ConnetionsContollers();

routes.post('/classes', classControllers.create)
routes.get('/classes', classControllers.index)

routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes;
