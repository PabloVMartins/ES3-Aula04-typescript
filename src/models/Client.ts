import { uuid } from 'uuidv4';

export default class Client {
  id: string;

  name: string;

  cpf: string;

  phone: number;

  birthday: Date;

  address: string;

  constructor({ name, cpf, birthday, address, phone }: Omit<Client, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.cpf = cpf;
    this.phone = phone;
    this.birthday = birthday;
    this.address = address;
  }
}
