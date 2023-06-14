import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  //   @Column()
  //   schedule: Date;

  //   @CreateDateColumn({ name: 'created_at' })
  //   createdAt: Date;
}
