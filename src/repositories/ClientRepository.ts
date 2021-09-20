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

  public save({ name, cpf, phone, birthday, address }: Client): Client {
    const client = new Client({
      name,
      cpf,
      phone,
      birthday,
      address,
    });
    this.clients.push(client);
    return client;
  }

  public delete(cpf: string): Client | undefined {
    let client;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.clients.length; i++) {
      if (cpf === this.clients[i].cpf) {
        client = this.clients[i];
        this.clients.splice(i, 1);
        break;
      }
    }
    return client;
  }

  public edit({ name, cpf, phone, birthday, address }: Client): Client {
    const client = new Client({
      name,
      cpf,
      phone,
      birthday,
      address,
    });

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.clients.length; i++) {
      if (cpf === this.clients[i].cpf) {
        this.clients[i] = client;
      }
    }
    return client;
  }
}
