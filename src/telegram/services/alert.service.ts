import { Injectable } from '@nestjs/common';
import { AlertMessage } from 'src/common/alerts';
import { TelegramService } from './';

@Injectable()
export class AlertService {
  constructor(private readonly telegramService: TelegramService) {}

  public async alertWinChange5PerCent() {
    await this.telegramService.sendMessage({
      chatId: '-677154145',
      message: AlertMessage.WinChange5PerCentMessage,
    });
  }

  public async alertWinChange10PerCent() {
    await this.telegramService.sendMessage({
      chatId: '-677154145',
      message: AlertMessage.WinChange10PerCentMessage,
    });
  }
}
