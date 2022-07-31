import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { SocketGateway } from './socket.gateway';
import { ScheduleModule } from '@nestjs/schedule';
import { BlazeCrashModule } from 'src/blaze-crash/blaze-crash.module';

@Module({
  imports: [ScheduleModule.forRoot(), BlazeCrashModule],
  providers: [SocketGateway, SocketService],
})
export class SocketModule {}
