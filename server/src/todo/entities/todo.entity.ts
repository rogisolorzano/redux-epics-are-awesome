import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  Index,
} from 'typeorm';
import {TodoPriority} from '../interfaces/todo-priority.interface';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  @Index({ unique: true })
  key: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  title: string;

  @Column()
  body: string;

  @Column({
    type: 'enum',
    enum: TodoPriority,
  })
  priority: TodoPriority;

  @Column()
  isCompleted: boolean;

  @Column('timestamp')
  dueAt: Date;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
