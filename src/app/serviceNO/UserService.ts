import { IUserResponse, IUser } from '../interfaces/IUser';
import UserRepository from '../repositoryNO/UserRepository';

class UserService {
  async create(payload: IUser): Promise<IUserResponse> {
    const result = await UserRepository.create(payload);
    return result;
  }
}

export default new UserService();
