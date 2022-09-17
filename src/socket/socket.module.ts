import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BlazeCrashModule } from 'src/blaze-crash/blaze-crash.module';
import { AlertService, TelegramService } from 'src/telegram/services';
import { SocketGateway } from './socket.gateway';
import { SocketService } from './socket.service';

@Module({
  imports: [ScheduleModule.forRoot(), BlazeCrashModule],
  providers: [SocketGateway, SocketService, TelegramService, AlertService],
})
export class SocketModule {}
