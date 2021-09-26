import { Router } from 'express';
import ClientController from '../controllers/ClientController';

const clientRouter = Router();
const clientController = new ClientController();

clientRouter.post('/', clientController.create);

clientRouter.get('/', clientController.list);

clientRouter.get('/:id', clientController.getById);

clientRouter.delete('/:id', clientController.delete);

clientRouter.put('/:id', clientController.update);

export default clientRouter;
