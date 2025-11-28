(() => {
    class Avenger {
        static avgAge: number = 35;

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
        ) { }
    }

    const antman: Avenger = new Avenger("Antman", "Avengers", "Scott Lang");
    console.log(antman);
})();