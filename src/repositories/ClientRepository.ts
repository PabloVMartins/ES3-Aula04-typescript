import Client from '../models/Client';

export default class ClientRepository {
  private clients: Array<Client>;

  constructor() {
    this.clients = [];
  }

  public findAll(): Array<Client> {
    return this.clients;
  }
