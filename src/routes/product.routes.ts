import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/', productController.create);

productRouter.get('/', productController.list);

productRouter.get('/:id', productController.getById);

productRouter.delete('/:id', productController.delete);

productRouter.put('/:id', productController.update);

// productRouter.patch('/lovers/:id', productController.increaseLovers);

export default productRouter;
