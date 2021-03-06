import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(nome: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO }