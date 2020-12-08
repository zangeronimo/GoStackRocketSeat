import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to upload the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhon_doe@gmail.com',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'john_tre@gmail.com',
    });

    expect(updatedUser.name).toBe('John Trê');
    expect(updatedUser.email).toBe('john_tre@gmail.com');
  });

  it('should not be able to upload the unexistent user-id', async () => {
    await expect(
      updateProfile.execute({
        user_id: 'unexistent-user-id',
        name: 'John Trê',
        email: 'john_tre@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to change with a used email', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhon_doe@gmail.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'test',
      email: 'test@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'jhon_doe@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to upload the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhon_doe@gmail.com',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'john_tre@gmail.com',
      old_password: '123456',
      password: '123123',
    });

    expect(updatedUser.name).toBe('John Trê');
    expect(updatedUser.email).toBe('john_tre@gmail.com');
    expect(updatedUser.password).toBe('123123');
  });

  it('should not be able to upload the password without old_password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhon_doe@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Trê',
        email: 'john_tre@gmail.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to upload the password with wrong old_password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jhon_doe@gmail.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Trê',
        email: 'john_tre@gmail.com',
        old_password: 'wrong-old-password',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
