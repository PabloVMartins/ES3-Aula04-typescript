import { Router } from 'express';
import Client from '../models/Client';
import ClientRepository from '../repositories/ClientRepository';
import CreateClientService from '../services/clientService/CreateClientService';
import DeleteClientService from '../services/clientService/DeleteClientService';
import FindByCpfClientService from '../services/clientService/FindByCpfClientService';
import PutClientService from '../services/clientService/PutClientService';

const clientRouter = Router();
const clientRepository = new ClientRepository();

clientRouter.get('/', (request, response) => {
  response.status(200).json(clientRepository.findAll());
});

clientRouter.get('/:cpf', (request, response) => {
  try {
    const service = new FindByCpfClientService(clientRepository);
    const { cpf } = request.params;

    const client = service.execute(Number(cpf));

    return response.status(200).json(client);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

clientRouter.post('/', (request, response) => {
  try {
    const service = new CreateClientService(clientRepository);
    const { name, cpf, phone, birthday, address, id } = request.body;
    const client = service.execute({
      name,
      cpf,
      phone,
      birthday,
      address,
      id,
    });

    return response.status(201).json(client);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

clientRouter.put('/:cpf', (request, response) => {
  try {
    const service = new PutClientService(clientRepository);
    const searchCpf = request.params.cpf;
    const client: Client = request.body;

    service.execute(searchCpf, client);
    return response.status(200).json(client);
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

clientRouter.delete('/:cpf', (request, response) => {
  try {
    const service = new DeleteClientService(clientRepository);
    const { cpf } = request.params;

    service.execute(cpf);
    return response.status(200).json('Cliente excluído com sucesso!');
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default clientRouter;
