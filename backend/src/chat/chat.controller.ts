// src/chat/chat.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ChatService } from './chat.service';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('sendMessage')
  @ApiBody({ type: String })
  sendMessage(@Body() message: string): string {
    console.log('Received message:', message);
    
    // Implement your response algorithm using ChatService
    const response = this.chatService.generateResponse(message);
    
    console.log('Generated response:', response);
    return response;
  }
}

