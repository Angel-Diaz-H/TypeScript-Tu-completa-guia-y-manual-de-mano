(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    };
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super fuerza'],
        // No es permitido 
        getName() {
            return this.name;
        }
    };
    console.log(flash.getName?.());
})();
export {};
//# sourceMappingURL=objects.js.map