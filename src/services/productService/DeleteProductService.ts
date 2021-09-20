import ProductRepository from '../../repositories/ProductRepository';

export default class DeleteProductService {
  private repository: ProductRepository;

  constructor(repository: ProductRepository) {
    this.repository = repository;
  }

  public execute(code: number): typeof code {
    const ExistsProduct = this.repository.findByCode(code);

    if (!ExistsProduct) {
      throw Error('Produto não encontrado');
    } else {
      this.repository.delete(code);
      return code;
    }
  }
}
