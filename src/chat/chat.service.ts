import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Chat } from 'src/schemas/chat.schemas';
import { Model } from 'mongoose';

@Injectable()
export class ChatService {
constructor(@InjectModel(Chat.name) private chatModel:Model<Chat>){}

  create(createChatDto: CreateChatDto) {
    const today = new Date();

    createChatDto.createdAt = today;
    createChatDto.updatedAt = today;

    return this.chatModel.create(createChatDto)
  }

  async findAll() {
    return await this.chatModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
