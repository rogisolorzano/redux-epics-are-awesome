import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrmConfigFactory} from './config/typeorm.config';
import {TodoModule} from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfigFactory,
    }),
    TodoModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
