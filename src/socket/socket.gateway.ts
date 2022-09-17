import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AlertService } from 'src/telegram/services';
import { SocketService } from './socket.service';
import { PercentWinLoseRate } from './types/calc-to-return.types';

@WebSocketGateway({ cors: { origin: '*' } })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private alertStatus: boolean = true;
  constructor(
    private readonly socketService: SocketService,
    private readonly alertService: AlertService,
  ) {}

  @WebSocketServer()
  private server: Server;

  handleConnection(client: Socket) {
    client.emit('blazecrash', this.socketService.getAllCalcs());
  }

  handleDisconnect(client: Socket) {}

  @Cron('*/15 * * * * *')
  handleCron() {
    const allCalcs = this.socketService.getAllCalcs();
    this.server.emit('blazecrash', allCalcs);

    //Strategy
    if (this.alertStatus) {
      allCalcs.percentWinLoseRateLast20.forEach(
        (element: PercentWinLoseRate) => {
          if (element.name === '5X' && Number(element.win) < 6) {
            this.alertStatus = false;
            return this.alertService.alertWinChange5PerCent();
          }
          if (element.name === '5X' && Number(element.win) < 11) {
            this.alertStatus = false;
            return this.alertService.alertWinChange10PerCent();
          }
        },
      );
    }
  }

  @Cron('*/1 * * * *')
  turnAlertOn() {
    this.alertStatus = true;
  }
}
