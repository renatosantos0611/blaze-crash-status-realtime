import { getXDiference } from "./blaze.calculate";
import { BlazeCrashProps } from "../types/blaze-crash.types";

export class BlazeCalc {

    private records: BlazeCrashProps[] = [];
    crashPoints: number[] = [];

    constructor(
        records: BlazeCrashProps[],
    ) {
        this.records = records;
        this.crashPoints = this.getCrashPoint();
    }

    private getCrashPoint(){
        return this.records.map(record => {
            return record.crash_point;
        });
    }
}