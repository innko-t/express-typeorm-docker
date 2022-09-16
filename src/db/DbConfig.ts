import { DataSource } from 'typeorm'
import 'dotenv/config';

export const myDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DARABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
})
