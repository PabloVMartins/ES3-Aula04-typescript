import { Router } from 'express';
import clientRouter from './client.routes';
import productRouter from './product.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/clients', clientRouter);

export default routes;
