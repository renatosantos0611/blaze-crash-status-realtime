import { Injectable } from "@nestjs/common";
import { PercentWinLoseRate } from "src/socket/types/calc-to-return.types";
import { BlazeCrashProps } from "../types/blaze-crash.types";
import { BlazeCalc } from "./blaze.calc";
import { getLoseChance } from "./blaze.calculate";

export class BlazePercentWinLoseRate extends BlazeCalc {
    constructor(records: BlazeCrashProps[]) {
        super(records);
    }

    getWinLosePercentChanceAny(crashPoints: number[], x: number): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(crashPoints, x))).toFixed(2);
        const lose = getLoseChance(crashPoints, x);
        return {name: `${x}X`, win, lose };
    }

    getWinLosePercentChance1x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 1.2))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 1.2);
        return { name: '1.20X', win, lose };
    }

    getWinLosePercentChance2x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 2))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 2);
        return { name: '2X', win, lose };
    }

    getWinLosePercentChance3x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 3))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 3);
        return { name: '3X', win, lose };
    }

    getWinLosePercentChance4x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 4))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 4);
        return { name: '4X', win, lose };
    }

    getWinLosePercentChance5x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 5))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 5);
        return { name: '5X', win, lose };
    }

    getWinLosePercentChance6x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints,6))).toFixed(2);
        const lose = getLoseChance(this.crashPoints,6);
        return { name: '6X', win, lose };
    }

    getWinLosePercentChance7x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 7))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 7);
        return { name: '7X', win, lose };
    }

    getWinLosePercentChance8x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 8))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 8);
        return { name: '8X', win, lose };
    }

    getWinLosePercentChance9x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 9))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 9);
        return { name: '9X', win, lose };
    }

    getWinLosePercentChance10x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 10))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 10);
        return { name: '10X', win, lose };
    }

    getWinLosePercentChance20x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 20))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 20);
        return { name: '20X', win, lose };
    }

    getWinLosePercentChance50x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 50))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 50);
        return { name: '50X', win, lose };
    }

    getWinLosePercentChance100x(): PercentWinLoseRate {
        const win = (100 - Number(getLoseChance(this.crashPoints, 100))).toFixed(2);
        const lose = getLoseChance(this.crashPoints, 100);
        return { name: '100X+', win, lose };
    }

    getAllWinLosePercentChance() {
        return [
            this.getWinLosePercentChance1x(),
            this.getWinLosePercentChance2x(),
            this.getWinLosePercentChance3x(),
            this.getWinLosePercentChance4x(),
            this.getWinLosePercentChance5x(),
            this.getWinLosePercentChance6x(),
            this.getWinLosePercentChance7x(),
            this.getWinLosePercentChance8x(),
            this.getWinLosePercentChance9x(),
            this.getWinLosePercentChance10x(),
            this.getWinLosePercentChance20x(),
            this.getWinLosePercentChance50x(),
            this.getWinLosePercentChance100x(),
        ];
    }
}