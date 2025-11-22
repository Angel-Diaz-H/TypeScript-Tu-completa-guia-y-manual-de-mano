(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());

    // Si la posición 11 (10) tiene algo, haz el uppercase, si no, no hagas nada.
    console.log(batman[10]?.toUpperCase() || 'No está presente!');
})()