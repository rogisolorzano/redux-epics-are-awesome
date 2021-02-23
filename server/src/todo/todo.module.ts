import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TodoService} from './todo.service';
import {TodoController} from './todo.controller';
import {TodoRepository} from "./todo.repository";

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
