import { genericFunction } from "./generics/generics"
import { Hero } from "./interfaces/hero"
import { Villian } from "./interfaces/villian"

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunction<Villian>(deadpool).dangerLevel)