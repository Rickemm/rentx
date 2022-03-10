import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAcatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAcatarUseCase)

    await updateUserAvatarUseCase.execute({
      user_id: id,
      avatar_file: null
    })

    return response.status(204).send();
  }  
}

export { UpdateUserAvatarController }