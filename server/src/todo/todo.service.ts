import {Injectable} from '@nestjs/common';
import {CreateTodoDto} from './dto/create-todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {TodoRepository} from "./todo.repository";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository)
    todoRepository: TodoRepository,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    // TODO: implement
  }

  findAll() {
    // TODO: implement
  }

  findOne(id: number) {
    // TODO: implement
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    // TODO: implement
  }

  remove(id: number) {
    // TODO: implement
  }
}
