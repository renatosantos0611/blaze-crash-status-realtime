import { Cron, CronExpression } from '@nestjs/schedule';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { BlazeCrashService } from 'src/blaze-crash/blaze-crash.service';
import { SocketService } from './socket.service';

@WebSocketGateway({ cors: { origin: '*' } })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor(
    private readonly socketService: SocketService,
    private readonly blazeCrashService: BlazeCrashService,
  ) {}

  @WebSocketServer()
  private server: Server;

  handleConnection(client: Socket) {
    client.emit('blazecrash', this.socketService.getAllCalcs());
  }

  handleDisconnect(client: Socket) {
  }

  @Cron('*/15 * * * * *')
  handleCron() {
    this.server.emit('blazecrash', this.socketService.getAllCalcs());
  }
}
