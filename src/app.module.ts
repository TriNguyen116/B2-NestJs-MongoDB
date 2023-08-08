import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nguyentantria4:DbSOQhvCMDpB27Dq@trint.cmo1zk5.mongodb.net/'),
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
