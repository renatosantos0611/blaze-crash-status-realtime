import { getXDiference } from "./blaze.calculate";
import { BlazeCalc } from "./blaze.calc";
import { BlazeCrashProps } from "../types/blaze-crash.types";
import { Injectable } from "@nestjs/common";
import { PercentBetweenRate } from "src/socket/types/calc-to-return.types";

export class BlazePercentBetweenRate extends BlazeCalc {

    constructor(records: BlazeCrashProps[]) {
        super(records);
    }

    getPercentXandYBetWeenAny(x: number, y: number){
        return {
            name: `${x}X-${y}X`,
            value: getXDiference(this.crashPoints, x, y)
        }
    }

    private getPercentXandY(x: number, y: number){
        return getXDiference(this.crashPoints, x, y);
    }

    private get1X(): PercentBetweenRate{
        return {
            name: "1.2X",
            value: this.getPercentXandY(0, 1.2)
        }
    }
    private getPercentBetween1x2x(): PercentBetweenRate{
        return {
            name: "1X-2X",
            value: this.getPercentXandY(1, 2)
        }
    }
    private getPercentBetween2x3x(): PercentBetweenRate{
        return {
            name: "2X-3X",
            value: this.getPercentXandY(2, 3)
        }
    }
    private getPercentBetween3x4x(): PercentBetweenRate{
        return {
            name: "3X-4X",
            value: this.getPercentXandY(3, 4)
        }
    }
    private getPercentBetween4x5x(): PercentBetweenRate{
        return {
            name: "4X-5X",
            value: this.getPercentXandY(4, 5)
        }
    }
    private getPercentBetween5x6x(): PercentBetweenRate{
        return {
            name: "5X-6X",
            value: this.getPercentXandY(5, 6)
        }
    }
    private getPercentBetween6x7x(): PercentBetweenRate{
        return {
            name: "6X-7X",
            value: this.getPercentXandY(6, 7)
        }
    }
    private getPercentBetween7x8x(): PercentBetweenRate{
        return {
            name: "7X-8X",
            value: this.getPercentXandY(7, 8)
        }
    }
    private getPercentBetween8x9x(): PercentBetweenRate{
        return {
            name: "8X-9X",
            value: this.getPercentXandY(8, 9)
        }
    }
    private getPercentBetween9x10x(): PercentBetweenRate{
        return {
            name: "9X-10X",
            value: this.getPercentXandY(9, 10)
        }
    }
    private getPercentBetween10x20x(): PercentBetweenRate{
        return {
            name: "10X-20X",
            value: this.getPercentXandY(10, 20)
        }
    }
    private getPercentBetween20x30x(): PercentBetweenRate{
        return {
            name: "20X-30X",
            value: this.getPercentXandY(20, 30)
        }
    }
    private getPercentBetween30x40x(): PercentBetweenRate{
        return {
            name: "30X-40X",
            value: this.getPercentXandY(30, 40)
        }
    }
    private getPercentBetween40x50x(): PercentBetweenRate{
        return {
            name: "40X-50X",
            value: this.getPercentXandY(40, 50)
        }
    }
    private getPercentBetween50x100x(): PercentBetweenRate{
        return {
            name: "50X-100X",
            value: this.getPercentXandY(50, 100)
        }
    }
    private getPercentAbove100x(): PercentBetweenRate{
        return {
            name: "100X+",
            value: this.getPercentXandY(100, 1000)
        }
    }

    public getAllPercentBetween(){
        return [
            this.get1X(),
            this.getPercentBetween1x2x(),
            this.getPercentBetween2x3x(),
            this.getPercentBetween3x4x(),
            this.getPercentBetween4x5x(),
            this.getPercentBetween5x6x(),
            this.getPercentBetween6x7x(),
            this.getPercentBetween7x8x(),
            this.getPercentBetween8x9x(),
            this.getPercentBetween9x10x(),
            this.getPercentBetween10x20x(),
            this.getPercentBetween20x30x(),
            this.getPercentBetween30x40x(),
            this.getPercentBetween40x50x(),
            this.getPercentBetween50x100x(),
            this.getPercentAbove100x()
        ]
    }
}