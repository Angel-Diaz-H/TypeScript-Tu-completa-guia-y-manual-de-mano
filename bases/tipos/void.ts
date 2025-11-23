(()=>{
    function callBatman(): void{
        
        // return 1; // Este es un error.
    }

    const callSuperman = ():void => {
        // return true; // Otro error.
    }

    const a = callBatman();

    console.log(a);
})()