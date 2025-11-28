(() => {
    const avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };
    const printAvenger = ({ ironman, ...resto }) => {
        console.log(ironman);
        console.log(resto);
    };
    const avengersArr = ['Cap. América', true, 150.15];
    const [capitan, ironman] = avengersArr;
    console.log({ ironman, capitan });
})();
export {};
//# sourceMappingURL=desestructuracion.js.map