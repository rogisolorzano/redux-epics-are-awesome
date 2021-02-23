import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {ConfigService} from '@nestjs/config';

export const typeOrmConfigFactory = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: +configService.get<number>('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.NODE_ENV === 'development',
});
