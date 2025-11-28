(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    };

    // Aquí sería ideal usar una interfaz o un type.
    // Destructuración de objetos.
    const avenger: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // const {poder, vision} = avenger;
    // console.log(poder, vision.toUpperCase());

    const printAvenger = ({ ironman, ...resto }: Avengers) => {
        console.log(ironman);
        console.log(resto);
    }

    // printAvenger(avenger);

    // Destructuración de arreglos.
    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15];
    const [capitan, ironman] = avengersArr;
    console.log({ ironman, capitan });

})();