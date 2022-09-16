import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';


@Entity('article')
export default class Article {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'integer',
    comment: '記事ID'
  })
  readonly id!: number;

  @Column('varchar', {comment:'タイトル', nullable: true })
  public title: String | null = null;

  @Column('varchar', {comment:'説明', nullable: true })
  public description: String | null = null;

  @Column('date', {comment:'出版日', nullable: true})
  public publishDate: Date | null = null;

  @CreateDateColumn({comment:'作成日'})
  readonly createdAt?: Date;

  @UpdateDateColumn({comment:'更新日'})
  readonly updatedAt?: Date;

  constructor(title: string, description: string, publishDate: Date) {
  this.title = title;
  this.description = description;
  this.publishDate = publishDate;
  }
  
}