import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service'; // Ajusta la ruta según tu estructura de proyecto
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: {
            // Aquí puedes agregar mocks de los métodos utilizados por AuthService
            findOne: jest.fn(),
            create: jest.fn(),
            // Otros métodos según sea necesario
          },
        },
        {
          provide: JwtService,
          useValue: {
            // Aquí puedes agregar mocks de los métodos utilizados por AuthService
            sign: jest.fn(),
            verify: jest.fn(),
            // Otros métodos según sea necesario
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Aquí puedes agregar más pruebas unitarias para AuthService
});
