import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhon_doe@gmail.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('John Doe');
    expect(profile.email).toBe('jhon_doe@gmail.com');
  });

  it('should not be able to show a invalid user_id profile', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhon_doe@gmail.com',
      password: '123456',
    });

    await expect(
      showProfile.execute({
        user_id: 'wrong-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
