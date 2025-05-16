"use strict";
function SummarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    let fullName;
    if (middleName) {
        fullName = `${firstName} ${middleName} ${lastName}`;
    }
    else {
        fullName = `${firstName} ${lastName}`;
    }
    let hobbiesStr;
    if (hobbies) {
        hobbiesStr = hobbies.join(", ");
    }
    else {
        hobbiesStr = "-";
    }
    let workStr;
    if (workInfo) {
        workStr = `${workInfo[0]} -> ${workInfo[1]}`;
    }
    else {
        workStr = "-";
    }
    return [id, fullName, age, hobbiesStr, workStr];
}
console.log(SummarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
//# sourceMappingURL=SummarizePerson.js.map