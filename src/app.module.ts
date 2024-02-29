import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import * as dotenv from 'dotenv'

dotenv.config()
const connectionStr = process.env.MONGO_URL;
@Module({
  imports: [UserModule, 
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: connectionStr,
      entities: [User]
    })
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}