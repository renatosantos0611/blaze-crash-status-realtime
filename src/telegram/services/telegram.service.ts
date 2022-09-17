import { Injectable } from '@nestjs/common';
import { Telegram } from 'telegraf';
import { SendMessageProps } from '../types';

@Injectable()
export class TelegramService {
  private readonly bot: Telegram = new Telegram(
    '5645566818:AAHYy5k-vD0XNNNBS0eY3QGD56n_ZmPhUFc',
  );

  public async sendMessage(sendMessageProps: SendMessageProps) {
    await this.bot.sendMessage(
      sendMessageProps.chatId,
      sendMessageProps.message,
    );
  }
}
