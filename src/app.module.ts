import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlazeCrashModule } from './blaze-crash/blaze-crash.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [SocketModule, BlazeCrashModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
