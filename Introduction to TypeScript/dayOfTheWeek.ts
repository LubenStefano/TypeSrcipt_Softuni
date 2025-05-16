function daysOfTheWeek(n: number){
    enum Days{
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    
    if (n <=  7){
    console.log(Days[n - 1]);
    }
    else {
        throw new Error("The number isn't valid day of the week");
    }
    
}

daysOfTheWeek(1)