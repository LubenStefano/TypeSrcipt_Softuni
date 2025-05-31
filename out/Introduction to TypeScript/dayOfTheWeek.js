"use strict";
function daysOfTheWeek(n) {
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 0] = "Monday";
        Days[Days["Tuesday"] = 1] = "Tuesday";
        Days[Days["Wednesday"] = 2] = "Wednesday";
        Days[Days["Thursday"] = 3] = "Thursday";
        Days[Days["Friday"] = 4] = "Friday";
        Days[Days["Saturday"] = 5] = "Saturday";
        Days[Days["Sunday"] = 6] = "Sunday";
    })(Days || (Days = {}));
    if (n <= 7) {
        console.log(Days[n - 1]);
    }
    else {
        throw new Error("The number isn't valid day of the week");
    }
}
daysOfTheWeek(1);
//# sourceMappingURL=dayOfTheWeek.js.map