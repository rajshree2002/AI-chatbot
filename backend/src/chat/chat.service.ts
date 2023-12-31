// chat.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  generateResponse(userMessage: string): string {
    console.log('Generating response for:', userMessage);

    const lowerCaseMessage = userMessage.toLowerCase();

    // Simple response algorithm based on keywords
    if (lowerCaseMessage.includes('hello')) {
      return "AI: Hello there!";
    } else if (lowerCaseMessage.includes('how are you')) {
      return "AI: I'm just a computer program, but thanks for asking!";
    } else {
      // If no specific keyword is found, echo the user's message
      return `AI: ${userMessage}`;
    }
  }
}
