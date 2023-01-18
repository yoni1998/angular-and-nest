import { baseClass } from './baseClass';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('basisgegevens')
export class BasisgegevensEntity implements baseClass {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: '' })
  navTitle: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
