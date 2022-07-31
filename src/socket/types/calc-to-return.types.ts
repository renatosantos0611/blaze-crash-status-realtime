export interface PercentBetweenRate {
    name: string;
    value: string;
}

export interface PercentWinLoseRate {
    name: string;
    win: string | number;
    lose: string | number;
}

export interface CalcToReturn {
    percentBetweenRateLast10: PercentBetweenRate[];
    percentWinLoseRateLast10: PercentWinLoseRate[];
    percentBetweenRateLast20: PercentBetweenRate[];
    percentWinLoseRateLast20: PercentWinLoseRate[];
    percentBetweenRateLast50: PercentBetweenRate[];
    percentWinLoseRateLast50: PercentWinLoseRate[];
    percentBetweenRateLast: PercentBetweenRate[];
    percentWinLoseRateLast: PercentWinLoseRate[];
    numberOfCrash: number;
    lastCrashTime: Date;
    lastCrashRecorded: number | string

}