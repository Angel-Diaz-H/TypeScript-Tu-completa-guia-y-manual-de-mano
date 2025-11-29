import { genericFunction } from "../generics/generics"
import { Villian } from "../interfaces"

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunction<Villian>(deadpool).dangerLevel)