import { SetType } from "./SetType"
import Exercise from "./Exercise"
import Intensity from "./Intensity"

export default class Set {
    type: SetType
    exercise: Exercise
    mass: number
    reps: number

    constructor (type: SetType, exercise: Exercise, mass: number, reps: number) {
        this.type = type
        this.exercise = exercise
        this.mass = mass
        this.reps = reps
    }

    static buildSet(type: SetType, exercise: Exercise, intensity: number, estimated1RM: number, reps: number): Set {
        let proportionOf1RM = Intensity.proportionOf1RM(reps, intensity)
        let mass = estimated1RM * proportionOf1RM

        return new Set(type, exercise, mass, reps)
    }
}