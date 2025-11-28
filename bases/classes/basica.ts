(() => {
    class Avenger {
        // Acceso a esta propiedad solo dentro de la clase.
        private name: string;

        // Acceso a esta propiedad dentro de la clase y en clases derivadas.
        public team: string;
        public realName?: string;

        // Acceso a esta propiedad desde cualquier parte.
        static avgAge: number = 35;

        constructor(name: string, team: string, realName?: string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman: Avenger = new Avenger("Antman", "Avengers");
    console.log(antman);

    // console.log(Avenger.avgAge);
})();