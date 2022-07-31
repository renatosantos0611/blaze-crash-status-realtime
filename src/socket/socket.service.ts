import { Injectable } from '@nestjs/common';
import { BlazeCrashService } from 'src/blaze-crash/blaze-crash.service';
import { BlazePercentBetweenRate } from 'src/blaze-crash/calc/blaze-percent-between';
import { BlazePercentWinLoseRate } from 'src/blaze-crash/calc/blaze-percent-winlose';
import { CalcToReturn } from './types/calc-to-return.types';

@Injectable()
export class SocketService {
    constructor(
        private readonly blazeCrashService: BlazeCrashService,
    ) {}

    getAllCalcs(): CalcToReturn {
        const records = this.blazeCrashService.getRecords();

        const calcs: CalcToReturn = {
            percentBetweenRateLast10: new BlazePercentBetweenRate(records.slice(-10)).getAllPercentBetween(),
            percentWinLoseRateLast10: new BlazePercentWinLoseRate(records.slice(-10)).getAllWinLosePercentChance(),
            percentBetweenRateLast20: new BlazePercentBetweenRate(records.slice(-20)).getAllPercentBetween(),
            percentWinLoseRateLast20: new BlazePercentWinLoseRate(records.slice(-20)).getAllWinLosePercentChance(),
            percentBetweenRateLast50: new BlazePercentBetweenRate(records.slice(-50)).getAllPercentBetween(),
            percentWinLoseRateLast50: new BlazePercentWinLoseRate(records.slice(-50)).getAllWinLosePercentChance(),
            percentBetweenRateLast: new BlazePercentBetweenRate(records).getAllPercentBetween(),
            percentWinLoseRateLast: new BlazePercentWinLoseRate(records).getAllWinLosePercentChance(),
            numberOfCrash: records.length,
            lastCrashTime: records.length > 0 ? records[records.length - 1].created_at : null,
            lastCrashRecorded: records.length > 0 ? records[records.length - 1].crash_point : null,
        }
        return calcs;
    }
}
