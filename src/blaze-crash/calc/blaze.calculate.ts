export function getXDiference(crashPoints: number[], x: number, y: number): string {
    const total = crashPoints.length;
    const percentage = ((crashPoints.filter((record: number) => record >= x && record < y).length / total) * 100).toFixed(2);
    return percentage
}

export function getLoseChance(crashPoints: number[], x: number): string {
    const total = crashPoints.length;
    const percentage = ((crashPoints.filter((value: number) => value <= x).length / total) * 100).toFixed(2);
    return percentage
}