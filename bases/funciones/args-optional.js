(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '--'}`;
    };
    // let noName: any;
    // const name = fullName(noName, 'Stark');
    const name = fullName('Tony');
    console.log({ name });
})();
export {};
//# sourceMappingURL=args-optional.js.map