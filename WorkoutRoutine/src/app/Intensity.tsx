export default class Intensity {
    public static EASY: number = 0.5
    public static MEDIUM: number = 0.7
    public static HARD: number = 0.9

    private static intensityCoeff(intensity: number): number {
        return 18 * intensity + 14
    }

    static reps(proportionOf1RM: number, intensity: number): number {
        return this.intensityCoeff(intensity) * (intensity / proportionOf1RM - intensity)
    }

    static proportionOf1RM(reps: number, intensity: number): number {
        return intensity / ((reps / this.intensityCoeff(intensity)) + intensity)
    }
}