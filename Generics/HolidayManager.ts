enum TravelVacation {
  Abroad = "Abroad",
  InCountry = "InCountry",
}

enum MountainVacation {
  Ski = "Ski",
  Hiking = "Hiking",
}

enum BeachVacation {
  Pool = "Pool",
  Sea = "Sea",
  ScubaDiving = "ScubaDiving",
}

interface Holiday {
  set start(val: Date);
  set end(val: Date);
  getInfo(): string;
}

interface VacationManager<T, V> {
  reserveVacation(holiday: T, vacationType: V): void;
  listReservations(): string;
}

class PlannedHoliday implements Holiday {
  _start: Date;
  _end: Date;

  constructor(startDate: Date, endDate: Date) {
    this.validateDate(startDate, endDate);

    this._start = startDate;
    this._end = endDate;
  }

  set start(val: Date) {
    this.validateDate(val, this._end);
  }
  set end(val: Date) {
    this.validateDate(this._start, val);
  }

  getInfo(): string {
    return `Holiday: ${this._start.toLocaleDateString()} - ${this._end.toLocaleDateString()}`;
  }

  private validateDate(start: Date, end: Date) {
    if (start >= end) throw new Error("Start date must be before end date.");
  }
}

class HolidayManager<T extends Holiday, V extends TravelVacation | MountainVacation | BeachVacation> implements VacationManager<T, V> {
    
    data: Map<T, V> = new Map<T, V>();

    reserveVacation(holiday: T, vacationType: V): void {
        this.data.set(holiday, vacationType);
    }
    listReservations(): string {
        const reservations: string[] = [];
        this.data.forEach((vacationType, holiday) => {
            reservations.push(`${holiday.getInfo()} => ${vacationType}`);
        });
        return reservations.join('\n');
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));

let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));

let holidayManager = new HolidayManager<Holiday, TravelVacation>();

holidayManager.reserveVacation(holiday, TravelVacation.Abroad);

holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);

console.log(holidayManager.listReservations())