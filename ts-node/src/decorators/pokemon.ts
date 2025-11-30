function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => { };
    }
};

// Bloquea la modificacion de la clase
const bloquearPrototipo = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log({target, propertyKey, descriptor});

        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                console.error('El id del pokemon debe estar entre 1 y 800');
                return;
            } else {
                return originalMethod(id);
            }
        }
    }
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string,
    ) { };

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en BD con el id ${id}`);
    }
};