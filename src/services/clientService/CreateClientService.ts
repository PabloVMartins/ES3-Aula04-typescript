import Client from '../../models/Client';
import ClientRepository from '../../repositories/ClientRepository';

export default class CreateClientService {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  public execute({ name, cpf, phone, birthday, address }: Client): Client {
    const ExistsClient = this.repository.findByCpf(cpf);

    if (ExistsClient) {
      throw Error('Cliente já cadastrado');
    } else {
      const client = new Client({
        name,
        cpf,
        phone,
        birthday,
        address,
      });
      this.repository.save(client);
      return client;
    }
  }
}
