import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'fines', schema: 'mondelez' })
export class Fine {
  @PrimaryGeneratedColumn()
  event_id: number;

  @Column()
  fine_severity: string;

  @Column()
  fine_class: string;
}
