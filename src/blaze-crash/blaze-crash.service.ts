import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
import { BlazeCrashBulder, BlazeCrashProps } from './types/blaze-crash.types';

@Injectable()
export class BlazeCrashService {
  constructor(private readonly httpService: HttpService) {}

  private records: BlazeCrashProps[] = [];

  @Cron('*/10 * * * * *')
  async getBlazeCrash() {
    const headersRequest = {
      'Content-Type': 'application/json', // afaik this one is not needed
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIwOTQ5NzgsImJsb2NrcyI6W10sImlhdCI6MTY1ODc4Mzk1MywiZXhwIjoxNjYzOTY3OTUzfQ.L-Ftt7gqU2vpowIWcTWSrxoDMzxc5VFg4B-lJaXb_40`,
    };
    const request = this.httpService.get(
      'https://api-v2.blaze.com/crash_games/recent/history',
      {
        headers: headersRequest,
      },
    );
    const blazeCrashRecords = await lastValueFrom(request);
    const blazeCrashProps = blazeCrashRecords.data.records;
    for (const crash in blazeCrashProps) {
      if (
        !this.records.find((record) => record.id === blazeCrashProps[crash].id)
      ) {
        const record = new BlazeCrashBulder(blazeCrashProps[crash]);
        this.records.push(record.getObject());
      }
    }
  }

  getRecords() {
    return this.records;
  }

  @Cron('* 2 * * *')
  cleanRecords() {
    this.records = this.records.slice(-1000);
  }
}
