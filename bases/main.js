"use strict";
var Valitations;
(function (Valitations) {
    Valitations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Valitations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Valitations || (Valitations = {}));
console.log(Valitations.validateDate(new Date('2020-01-01')));
//# sourceMappingURL=main.js.map