// src/app.module.ts
import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule],
})
export class AppModule {}
