function leapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        console.log(`yes`);
    }
    else {
        console.log(`no`)
    }
}

leapYear(1984);
leapYear(2003);
leapYear(1900);
leapYear(2600);
leapYear(2100);
leapYear(2028);
leapYear(2794);
leapYear(2200);
leapYear(4);
leapYear(4);