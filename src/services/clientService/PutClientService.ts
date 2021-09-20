import Client from '../../models/Client';
import ClientRepository from '../../repositories/ClientRepository';

export default class PutClientService {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  public execute(
    searchCpf: string,
    { name, cpf, phone, birthday, address, id }: Client,
  ): Client {
    const ExistsClient = this.repository.findByCpf(searchCpf);

    if (!ExistsClient) {
      throw Error('Cliente não encontrado');
    } else {
      this.repository.edit({
        name,
        cpf,
        phone,
        birthday,
        address,
        id,
      });
      return ExistsClient;
    }
  }
}
