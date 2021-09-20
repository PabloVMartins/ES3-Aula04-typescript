import Product from '../../models/Product';
import ProductRepository from '../../repositories/ProductRepository';

export default class PutProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute(
    searchCode: number,
    { buyPrice, code, description, lovers, sellPrice, tags, id }: Product,
  ): Product {
    const ExistsProduct = this.repository.findByCode(searchCode);

    if (!ExistsProduct) {
      throw Error('Produto não encontrado');
    } else {
      this.repository.edit({
        buyPrice,
        code,
        description,
        lovers,
        sellPrice,
        tags,
        id,
      });
      return ExistsProduct;
    }
  }
}
