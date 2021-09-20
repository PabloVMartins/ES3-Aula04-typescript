import ClientRepository from '../../repositories/ClientRepository';

export default class DeleteClientService {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  public execute(cpf: string): typeof cpf {
    const ExistsClient = this.repository.findByCpf(cpf);

    if (!ExistsClient) {
      throw Error('Cliente não encontrado');
    } else {
      this.repository.delete(cpf);
      return cpf;
    }
  }
}
