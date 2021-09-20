import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';

export default class CreateProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = this.repository.findByCode(code);

    if (product) {
      throw Error('Produto já cadastrado');
    } else {
      const p = new Product({
        buyPrice,
        code,
        description,
        lovers,
        sellPrice,
        tags,
      });
      this.repository.save(p);
      return p;
    }
  }
}
