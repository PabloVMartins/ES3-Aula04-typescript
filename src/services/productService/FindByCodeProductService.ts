import Product from '../../models/Product';
import ProductRepository from '../../repositories/ProductRepository';

export default class FindByCodeProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute(code: number): Product | undefined {
    const ExistsProduct = this.repository.findByCode(code);

    if (!ExistsProduct) {
      throw Error('Produto não encontrado');
    } else {
      return ExistsProduct;
    }
  }
}
