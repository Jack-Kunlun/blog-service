import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '124.222.4.200',
  port: 5432,
  username: 'admin',
  password: 'admin123',
  database: 'tallybook',
  entities: [`${__dirname}/../modules/**/entity/*.{js,ts}`],
  synchronize: false,
  logging: ['error'],
};
