
export function GetLoveMessage() {
    let check = Math.random() * 100
    if (check < 10) {
        return "loves you!"
    } else if (check < 30) {
        return "chirps happily."
    } else if (check < 50) {
        return "peeps."
    } else if (check < 70) {
        return "whistles."
    } else if (check < 90) {
        return "ruffles its feathers."
    } else {
        return "brings you some gold!"
    }
}