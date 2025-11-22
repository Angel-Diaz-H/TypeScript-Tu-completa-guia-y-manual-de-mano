(() => {
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    // Si la posición 11 (10) tiene algo, haz el uppercase, si no, no hagas nada.
    console.log(batman[10]?.toUpperCase() || 'No está presente!');
})();
export {};
//# sourceMappingURL=strings.js.map