import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import DeleteProductService from '../services/productService/DeleteProductService';

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
