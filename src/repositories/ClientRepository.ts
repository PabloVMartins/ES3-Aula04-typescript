import Client from '../models/Client';

export default class ClientRepository {
  private clients: Array<Client>;

  constructor() {
    this.clients = [];
  }

  public findAll(): Array<Client> {
    return this.clients;
  }

  public findByCpf(cpf: string): Client | undefined {
    // eslint-disable-next-line eqeqeq
    return this.clients.find(client => client.cpf == cpf);
  }

