import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration';
import { DatabaseModule } from './database/database.module';
import { RedisModule } from '@webeleon/nestjs-redis';

@Module({
  imports: [
    RedisModule.forRootAsync({
      useFactory: () => ({ url: 'redis://localhost:6379' }),
    }),
    UsersModule,
    PostsModule,
    AuthModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
