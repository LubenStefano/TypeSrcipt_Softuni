"use strict";
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    _start;
    _end;
    constructor(startDate, endDate) {
        this.validateDate(startDate, endDate);
        this._start = startDate;
        this._end = endDate;
    }
    set start(val) {
        this.validateDate(val, this._end);
    }
    set end(val) {
        this.validateDate(this._start, val);
    }
    getInfo() {
        return `Holiday: ${this._start.toLocaleDateString()} - ${this._end.toLocaleDateString()}`;
    }
    validateDate(start, end) {
        if (start >= end)
            throw new Error("Start date must be before end date.");
    }
}
class HolidayManager {
    data = new Map();
    reserveVacation(holiday, vacationType) {
        this.data.set(holiday, vacationType);
    }
    listReservations() {
        const reservations = [];
        this.data.forEach((vacationType, holiday) => {
            reservations.push(`${holiday.getInfo()} => ${vacationType}`);
        });
        return reservations.join('\n');
    }
}
let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());
//# sourceMappingURL=HolidayManager.js.map