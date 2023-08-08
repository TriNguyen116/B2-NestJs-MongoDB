export class CreateChatDto {
  id: string;
  content: string;
  sender: string;
  receiver: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}
