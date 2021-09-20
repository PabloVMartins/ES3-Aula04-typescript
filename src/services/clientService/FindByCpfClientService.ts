import Client from '../../models/Client';
import ClientRepository from '../../repositories/ClientRepository';

export default class FindByCpfProductService {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  public execute(cpf: string): Client | undefined {
    const ExistsClient = this.repository.findByCpf(cpf);

    if (!ExistsClient) {
      throw Error('Cliente não encontrado');
    } else {
      return ExistsClient;
    }
  }
}
