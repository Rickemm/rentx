import { Request, Response } from "express";
import { container } from 'tsyringe';

import { ListCategoriyUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriyUseCase);

    const all = await listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController }