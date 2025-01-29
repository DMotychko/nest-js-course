import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { UserEntity } from './src/users/entities/user.entity';
import { PostEntity } from './src/posts/entities/post.entity';
import configuration from './src/common/config/configuration';
import * as path from 'node:path';
import * as process from 'node:process';
dotenv.config();

const postgresConfig = configuration().database;

export default new DataSource({
  type: 'postgres',
  host: postgresConfig.host,
  port: postgresConfig.port,
  username: postgresConfig.user,
  password: postgresConfig.password,
  database: postgresConfig.database,
  entities: [UserEntity, PostEntity],
  migrations: [
    path.join(process.cwd(), 'src', 'database', 'migrations', '*.ts'),
  ],
  synchronize: false,
});
