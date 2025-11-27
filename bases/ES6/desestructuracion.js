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
        console.log(resto.vision.toUpperCase());
    };
    printAvenger(avenger);
})();
export {};
//# sourceMappingURL=desestructuracion.js.map