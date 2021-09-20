import { Router } from 'express';
import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/productService/CreateProductService';
import DeleteProductService from '../services/productService/DeleteProductService';
import PutProductService from '../services/productService/PutProductService';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const produto = service.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });

    return response.status(201).json(produto);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

productRouter.put('/:code', (request, response) => {
  try {
    const service = new PutProductService(productRepository);
    const searchCode = Number(request.params.code);
    const product: Product = request.body;

    service.execute(searchCode, product);
    return response.status(200).json(product);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

productRouter.delete('/:code', (request, response) => {
  try {
    const service = new DeleteProductService(productRepository);
    const { code } = request.params;

    service.execute(Number(code));
    return response.status(200).json('Produto excluído com sucesso!');
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default productRouter;
