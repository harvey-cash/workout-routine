import Activity from "./Activity"

export default class Routine {
    activities: Activity[]

    constructor(activities: Activity[]) {
        this.activities = activities
    }
}