/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import ClientRepository from '../repositories/ClientRepository';

interface Request {
  name: string;
  cpf: string;
  mail: string;
  phone: string;
  birthday: Date;
  address: string;
}

export default class ClientService {
  async create({ name, cpf, mail, phone, birthday, address }: Request) {
    const clientRepository = getCustomRepository(ClientRepository);

    const clientAlreadyExists = await clientRepository.findOne({
      cpf,
    });

    if (clientAlreadyExists) {
      throw new Error('Clinte já existe');
    }

    const client = clientRepository.create({
      name: name.toUpperCase(),
      cpf,
      mail,
      phone,
      birthday,
      address,
    });

    await clientRepository.save(client);
    return client;
  }

  async list() {
    const clientRepository = getCustomRepository(ClientRepository);

    const all = await clientRepository.find();

    return all;
  }

  async getById(id: string) {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne(id);

    if (!client) {
      throw new Error('Cliente não encontrado!');
    }

    return client;
  }

  async delete(id: string) {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne(id);

    if (!client) {
      throw new Error('Cliente não encontrado!');
    }

    const deleted = await clientRepository.delete(id);

    return deleted;
  }

  async Update(
    id: string,
    { name, cpf, mail, phone, birthday, address }: Request,
  ) {
    const clientRepository = getCustomRepository(ClientRepository);

    const client = await clientRepository.findOne(id);

    if (!client) {
      throw new Error('Cliente não encontrado!');
    }

    await clientRepository.update(id, {
      name,
      cpf,
      phone,
      mail,
      address,
      birthday,
    });

    const clientUpdate = await clientRepository.findOne(id);

    return clientUpdate;
  }
}
