import { Router } from 'express';
import ExampleController from '../controllers/ExampleController.js';

const exampleRouter = Router();

exampleRouter.get('', ExampleController.getStatus)
exampleRouter.get('/handlebar', ExampleController.getHandlebar)

export default exampleRouter;