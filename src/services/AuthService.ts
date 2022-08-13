import { User, UserAttribute } from '../model/Model';

export class AuthService {
  public async login(userName: string, password: string):Promise<User | undefined> {
    if (userName === 'user1' && password === '12345') {
      return {
        userName: userName,
        email: 'some@email.com'
      }
    } else {
      return undefined
    }
  }

  public async getUserAttributes(user: User):Promise<UserAttribute[]>{
    const result: UserAttribute[] = [];
    result.push({
      Name: 'description',
      Value: 'Best User Ever!'
    });
    result.push({
      Name: 'job',
      Value: 'Engineer'
    });
    result.push({
      Name: 'age',
      Value: '22'
    });
    result.push({
      Name: 'experience',
      Value: '10 years'
    });
    return result
  }


}