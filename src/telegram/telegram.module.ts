import { Module } from '@nestjs/common';
import { AlertService, TelegramService } from './services';

@Module({
  providers: [AlertService, TelegramService],
  exports: [AlertService, TelegramService],
})
export class TelegramModule {}
