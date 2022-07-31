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
    const request = this.httpService.get(
      'https://blaze.com/api/crash_games/recent/history',
    );
    const blazeCrashRecords = await lastValueFrom(request);
    const blazeCrashProps = blazeCrashRecords.data.records;
    for(const crash in blazeCrashProps) {
      if(!this.records.find(record => record.id === blazeCrashProps[crash].id)) {
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
