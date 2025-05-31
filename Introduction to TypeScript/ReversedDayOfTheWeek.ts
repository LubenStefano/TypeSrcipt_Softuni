function ReversedDayOfTheWeek(day: string): number {
  enum Days {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7,
  }

  return Days[day as keyof typeof Days];
}

console.log(ReversedDayOfTheWeek("Sunday"))