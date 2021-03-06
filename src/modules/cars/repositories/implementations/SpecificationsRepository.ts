import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  
  private specifications: Specification[];

  constructor(){
    this.specifications = [];
  }
  create({ description, name }: ICreateSpecificationDTO): void {
    const specifications = new Specification();

    Object.assign(specifications, {
      description,
      name,
      created_at: new Date(),
    });

    this.specifications.push(specifications);
  }
  findByName(name:string): Specification {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }
}

export { SpecificationsRepository }